// Fetch is used instead of 'cy.request' so that the calls can be intercepted and mocked.

describe('Section one', () => {
  before(() => {
    cy.visit('http://localhost:3333/');

    // Reset stored counter value
    cy.window().then(win => cy.wrap({func: () => win.fetch('/api/counter/reset')}).invoke('func'));
  });

  it('API should return status', () => {
    cy.window().then(win => {
      cy.wrap({ func: () => win.fetch('/api').then(response => response.json()) })
        .invoke('func')
        .then(json => {
          expect(json.success).to.equal(true);
          expect(json.mocked).to.equal(true);
        });
    });
  });

  it('API /counter should return current value', () => {
    cy.window().then(win => {
      cy.wrap({ func: () => win.fetch('/api/counter').then(response => response.json()) })
        .invoke('func')
        .then(json => {
          expect(json.value).to.equal(0);
          expect(json.mocked).to.equal(true);
        });
    });
  });

  it('API /counter/increment should return new value and update current value', () => {
    cy.window().then(win => {
      cy.wrap({ func: () => win.fetch('/api/counter/increment').then(response => response.json()) })
        .invoke('func')
        .then(json => expect(json.value).to.equal(1));

      cy.wrap({ func: () => win.fetch('/api/counter').then(response => response.json()) })
        .invoke('func')
        .then(json => expect(json.value).to.equal(1));
    });
  });

  it('API /counter/decrement should return new value and update current value', () => {
    cy.window().then(win => {
      cy.wrap({ func: () => win.fetch('/api/counter/decrement').then(response => response.json()) })
        .invoke('func')
        .then(json => expect(json.value).to.equal(0));

      cy.wrap({ func: () => win.fetch('/api/counter').then(response => response.json()) })
        .invoke('func')
        .then(json => expect(json.value).to.equal(0));
    });
  });

  it('API /data should return some random data', () => {
    cy.window().then(win => {
      cy.wrap({ func: () => win.fetch('/api/data').then(response => response.json()) })
        .invoke('func')
        .then(json => {
          expect(json.data).to.be.an('array');
          expect(json.data).to.have.length(10);
          json.data.forEach(row => {
            expect(row).to.be.an('object');
            expect(row).to.have.property('label');
            expect(row).to.have.property('value');
            expect(row.value).to.be.at.least(0);
            expect(row.value).to.be.at.most(100);
          });
        });
    });
  });

  it('API /login should return current value', () => {
    cy.window().then(win => {
      const payload = {

      };

      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(payload)
      };

      cy.wrap({
        func: () => win.fetch('/api/login', config).then(response => response.json())
      }).invoke('func').then(json => {
        expect(json.success).to.equal(false);
        expect(json.message).to.equal('Username is required');
      });

      cy.wrap({
        func: () => win.fetch(
          '/api/login',
          { ...config, body: JSON.stringify({ username: 'wrong' })
        }).then(response => response.json())
      }).invoke('func').then(json => {
        expect(json.success).to.equal(false);
        expect(json.message).to.equal('Password is required');
      });

      cy.wrap({
        func: () => win.fetch(
          '/api/login',
          { ...config, body: JSON.stringify({ username: 'wrong', password: 'wrong' })
        }).then(response => response.json())
      }).invoke('func').then(json => {
          expect(json.success).to.equal(false);
          expect(json.message).to.equal('Wrong credentials');
      });

      cy.wrap({
        func: () => win.fetch(
          '/api/login',
          { ...config, body: JSON.stringify({ username: 'user1', password: 'wrong' })
        }).then(response => response.json())
      }).invoke('func').then(json => {
        expect(json.success).to.equal(false);
        expect(json.message).to.equal('Wrong credentials');
      });

      cy.wrap({
        func: () => win.fetch(
          '/api/login',
          { ...config, body: JSON.stringify({ username: 'user1', password: 'pass1' })
        }).then(response => response.json())
      }).invoke('func').then(json => {
        expect(json.success).to.equal(true);
      });
    });
  });

});

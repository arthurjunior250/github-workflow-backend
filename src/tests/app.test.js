import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../app.js';

chai.use(chaiHttp);
chai.should();

describe('App', () => {
  it('it should test the app', (done) => {
    chai
        .request(server)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
  });
});

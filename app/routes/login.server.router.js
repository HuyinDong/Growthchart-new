/**
 * Created by dongyin on 9/9/15.
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('./db');


module.exports = function(app){
    passport.use(new LocalStrategy(
        function(username, password, done) {
            db.users.findByUsername(username, function (err, user) {
                if (err) { return done(err); }
                if (!user) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (user.password != password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }

                return done(null, user);
            });
        }
    ));


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        db.users.findById(id, function(err, user) {
            done(err, user);
        });
    });

    app.use(passport.initialize());
    app.use(passport.session());

    app.get('/login',function(req,res){
        res.redirect('/invalid');
    });

    app.post('/login',function(req, res, next) {
        passport.authenticate('local', function(err, user, info) {
            if (err) { return next(err); }
            // Redirect if it fails
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function(err) {

                if (err) { return next(err); }
                // Redirect if it succeeds
                console.log("success");
                res.cookie("username",user.username,{ maxAge: 900000 });
                res.cookie("id",user.id,{ maxAge: 900000 });

                return res.redirect('/');
            });
        })(req, res, next);
    });

    app.get('/invalid',function(req,res){
        res.render('invalid');
    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};

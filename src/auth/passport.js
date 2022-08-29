import passport from "passport";
import { ExtractJwt, StrategyJwt} from "passport-jwt";
import { User } from "../models/User.js";

passport.use(
    new StrategyJwt(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
      function (jwtPayload, done) {
        return User.findOne({ where: { id: jwtPayload.id } })
          .then((user) => {
            return done(null, user);
          })
          .catch((err) => {
            return done(err);
          });
      }
    )
  );
  
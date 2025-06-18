export const adminmiddleware = async (req, res,next) => {
  try {
    const adminrole = req.user.isAdmin;
    if (!adminrole) {
      return res.status(403).json({ message: "unauthorized , user not admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};

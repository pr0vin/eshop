const User = require("../models/User");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  try {
    const user = await User.find().select("-password");
    if (!user) {
      res.status(404).json({ message: "no users are there" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.send(error.message);
  }
};

const updateUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      res
        .status(200)
        .json({ user: user, message: "user updated successfully!" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else {
      res
        .status(200)
        .json({ user: user, message: "user deleted successfully!" });
    }
  } catch (error) {
    res.send(error.message);
  }
};

module.exports = { updateUserById, deleteUserById, getUsers, getUserById };

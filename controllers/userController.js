import User from "../models/User.js";

// 📨 Request to become teacher
export const requestTeacher = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (user.teacherRequest === "pending") {
      return res.status(400).json({ message: "Request already pending" });
    }

    user.teacherRequest = "pending";
    await user.save();

    res.json({ message: "Teacher request sent" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

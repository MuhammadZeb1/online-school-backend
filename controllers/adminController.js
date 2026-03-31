import User from "../models/User.js";

// ✅ Approve Teacher
export const approveTeacher = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    user.role = "teacher";
    user.teacherRequest = "approved";

    await user.save();

    res.json({ message: "Teacher approved" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ❌ Reject Teacher
export const rejectTeacher = async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    user.teacherRequest = "rejected";

    await user.save();

    res.json({ message: "Teacher request rejected" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📋 Get all pending requests
export const getTeacherRequests = async (req, res) => {
  try {
    const users = await User.find({ teacherRequest: "pending" });

    res.json(users);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

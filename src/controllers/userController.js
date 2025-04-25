import User from '../models/User.js';

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        await user.deleteOne(); // This triggers the middleware
        res.status(200).json({ message: "User and their books deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export { deleteUser };
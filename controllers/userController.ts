import { User } from "../model/user";
import { Request, Response } from "express";

// CREATE
export const createUser = async (req: Request, res: Response) => {
    const user = await User.create(req.body);
    res.json(user);
};
// READ
export const getUsers = async (req: Request, res: Response) => {
    const users = await User.find();
    res.json(users);
};
// UPDATE
export const updateUser = async (req: Request, res: Response) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(user);
};
// DELETE
export const deleteUser = async (req: Request, res: Response) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
};

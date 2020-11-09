import DataLoader from "dataloader";
import { User } from "../entities/User";

// keys [1, 2, 4, 29]
// returns users [{id: 1, username: 'asdsa'}...]
// define how to batch them in one SQL query this function
export const createUserLoader = () =>
  new DataLoader<number, User>(async (userIds) => {
    const users = await User.findByIds(userIds as number[]);
    const userIdToUser: Record<number, User> = {};
    users.forEach((u) => {
      userIdToUser[u.id] = u;
    });

    return userIds.map((userId) => userIdToUser[userId]);
  });

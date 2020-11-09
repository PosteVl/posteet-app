import DataLoader from "dataloader";
import { Updoot } from "../entities/Updoot";

// keys [{postId: 1, userId: 55}, ...]
// returns Updoot object [{postId: 1, userId: 55, value: 1}, ...]
// in one SQL query
// define how to batch them in one SQL query this function
export const createUpdootLoader = () =>
  new DataLoader<{ postId: number; userId: number }, Updoot | null>(
    async (keys) => {
      const updoots = await Updoot.findByIds(keys as any);
      // the key is a join of the 2 foreign keys, user id and post id, so we make it a string
      const updootIdsToUpdoot: Record<string, Updoot> = {};
      updoots.forEach((updoot) => {
        updootIdsToUpdoot[`${updoot.userId}|${updoot.postId}`] = updoot;
      });

      return keys.map(
        (key) => updootIdsToUpdoot[`${key.userId}|${key.postId}`]
      );
    }
  );

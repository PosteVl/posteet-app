import { Box, IconButton } from "@chakra-ui/core";
import React from "react";
import NextLink from "next/link";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButtonsProps {
  id: number;
  creatorId: number;
}

// component will be cached by urql, no need to worry about duplicate queries
export const EditDeletePostButtons: React.FC<EditDeletePostButtonsProps> = ({
  id,
  creatorId,
}) => {
  const [{ data: meData }] = useMeQuery();
  const [, deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }

  return (
    <Box>
      <NextLink href="/post/edit/[id" as={`/post/edit/${id}`}>
        <IconButton
          mr={4}
          aria-label="Edit Post"
          icon="edit"
          onClick={() => {}}
        />
      </NextLink>
      <IconButton
        aria-label="Delete Post"
        icon="delete"
        onClick={() => {
          deletePost({
            id,
          });
        }}
      />
    </Box>
  );
};

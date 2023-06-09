import React, { useState } from "react";
import { Post } from "./Post";
import { Paper, Typography } from "@mui/material";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import { Warning } from "@mui/icons-material";

export const PostsFeed = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
    {
      id: "1",
      title: "Lorem Uashaasasasasasasasas",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat neque ducimus iusto? Inventore molestiae perferendis facere suscipit reiciendis nihil, tempore asperiores recusandae repellendus aliquam quas placeat animi, veniam esse, beatae aperiam voluptatum minima. Quis?",
      publicationDate: "6th june",
      userName: "Rabinarayan Patra",
      categories: ["Sports", "Entertainment"],
      image:
        "https://cdn.cfr.org/sites/default/files/styles/slide_3_2/public/image/2021/12/RTXJK7FE%20%281%29.JPG.webp",
    },
  ]);

  if (!posts || posts.length === 0) {
    return (
      <div
        style={{
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Warning style={{ marginRight: "8px" }} />
        <Typography variant="body1" color="textSecondary">
          No posts available
        </Typography>
      </div>
    );
  }
  return (
    <>
      <Paper
        sx={{
          marginTop: "5px",
          padding: "5px 15px",
        }}
      >
        <Typography
          variant="h5"
          style={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "10px",
            //   borderBottom: "2px solid #000",
          }}
        >
          Top Blogs for Today <DynamicFeedIcon fontSize="large" />
        </Typography>
        <div
          style={{
            maxWidth: "100%",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          {posts?.map((v, k) => {
            return <Post key={k} post={v} />;
          })}
        </div>
      </Paper>
    </>
  );
};

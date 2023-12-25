const chai = require("chai");
const sinon = require("sinon");
const { expect } = chai;
const { getAllPosts, getSinglePost } = require("../../controllers/posts.js"); //place with the actual path to your user controller
const Post = require("../../models/Posts.js"); // Replace with the actual path to your user model

describe("Get my all my posts", () => {
  describe("getAllPosts", () => {
    it("should be able to retrieve my user entity", async () => {
      const req = { user: { id: 1 } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
        success: true,
      };

      req.headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAzNDM1MzgzfQ.RtyYXk5QMXahlSZVQ4Td079eOskjurFdE55fkELikhI",
      };
      await getAllPosts(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(
        res.json.calledWithMatch({
          success: true,
          data: sinon.match.object,
          message: "Successfully returned all posts",
        })
      ).to.be.true;
    });
  });
});

describe("Get my Single my post", () => {
  describe("getSinglePost", () => {
    it("should be able to retrieve my user entity", async () => {
      const req = { params: { postId: 1 }, user: { id: 1 } };
      const res = {
        status: sinon.stub().returnsThis(),
        json: sinon.stub(),
        success: true,
      };

      req.headers = {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzAzNDM1MzgzfQ.RtyYXk5QMXahlSZVQ4Td079eOskjurFdE55fkELikhI",
      };
      await getSinglePost(req, res);

      expect(res.status.calledWith(200)).to.be.true;
      expect(
        res.json.calledWithMatch({
          success: true,
          data: sinon.match.object,
          message: "Successfully returned post",
        })
      ).to.be.true;
    });
  });
});

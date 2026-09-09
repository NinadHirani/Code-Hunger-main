// server/api.ts
import express from "express";

// server/routes.ts
import { Router } from "express";
import vm from "vm";
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  users;
  problems;
  submissions;
  userProblems;
  userInteractions;
  contests;
  contestParticipants;
  badges;
  userBadges;
  userStreaks;
  rewardPoints;
  colleges;
  learningPaths;
  userLearningPaths;
  jobSimulations;
  constructor() {
    this.users = /* @__PURE__ */ new Map();
    this.problems = /* @__PURE__ */ new Map();
    this.submissions = /* @__PURE__ */ new Map();
    this.userProblems = /* @__PURE__ */ new Map();
    this.userInteractions = /* @__PURE__ */ new Map();
    this.contests = /* @__PURE__ */ new Map();
    this.contestParticipants = /* @__PURE__ */ new Map();
    this.badges = /* @__PURE__ */ new Map();
    this.userBadges = /* @__PURE__ */ new Map();
    this.userStreaks = /* @__PURE__ */ new Map();
    this.rewardPoints = /* @__PURE__ */ new Map();
    this.colleges = /* @__PURE__ */ new Map();
    this.learningPaths = /* @__PURE__ */ new Map();
    this.userLearningPaths = /* @__PURE__ */ new Map();
    this.jobSimulations = /* @__PURE__ */ new Map();
    this.initializeProblems();
    this.initializeContests();
    this.initializeBadges();
    this.initializeNewFeatures();
  }
  initializeNewFeatures() {
    const paths = [
      { id: "1", title: "Data Structures Mastery", description: "Master the fundamentals of DSA.", image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop", problems: [{ problemId: "two-sum", order: 1 }, { problemId: "reverse-linked-list", order: 2 }] },
      { id: "2", title: "Algorithm Design", description: "Learn advanced algorithm techniques.", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&auto=format&fit=crop", problems: [{ problemId: "jump-game", order: 1 }] }
    ];
    paths.forEach((p) => this.learningPaths.set(p.id, p));
    const sims = [
      { id: "1", companyName: "Google", role: "Software Engineer", description: "Experience a mock interview at Google.", problemIds: ["two-sum", "jump-game"], duration: 90, logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" },
      { id: "2", companyName: "Meta", role: "Frontend Developer", description: "Frontend focused interview simulation.", problemIds: ["reverse-linked-list"], duration: 60, logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" }
    ];
    sims.forEach((s) => this.jobSimulations.set(s.id, s));
    const clgs = [
      { id: "1", name: "MIT", slug: "mit", domain: "mit.edu", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg" },
      { id: "2", name: "Stanford", slug: "stanford", domain: "stanford.edu", logo: "https://upload.wikimedia.org/wikipedia/en/b/b7/Stanford_University_seal_2003.svg" }
    ];
    clgs.forEach((c) => this.colleges.set(c.id, c));
  }
  initializeProblems() {
    const sampleProblems2 = [
      {
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "Easy",
        order: 1,
        videoId: "8-k1C6ehKuw",
        description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
        examples: [
          {
            input: "nums = [2,7,11,15], target = 9",
            output: "[0,1]",
            explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
          },
          {
            input: "nums = [3,2,4], target = 6",
            output: "[1,2]"
          }
        ],
        constraints: [
          "2 \u2264 nums.length \u2264 10\u2074",
          "-10\u2079 \u2264 nums[i] \u2264 10\u2079",
          "-10\u2079 \u2264 target \u2264 10\u2079",
          "Only one valid answer exists."
        ],
        topics: ["Array", "Hash Table"],
        acceptance: 49,
        submissions: 52e5,
        accepted: 26e5,
        starterCode: {
          javascript: `function twoSum(nums, target) {
    // Write your code here
};`,
          python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass`,
          java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
          { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] }
        ]
      },
      {
        title: "Reverse Linked List",
        slug: "reverse-linked-list",
        difficulty: "Easy",
        order: 2,
        videoId: "G0_I-ZF0S38",
        description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
        examples: [
          {
            input: "head = [1,2,3,4,5]",
            output: "[5,4,3,2,1]",
            explanation: "The linked list is reversed."
          },
          {
            input: "head = [1,2,3]",
            output: "[3,2,1]"
          },
          {
            input: "head = [1]",
            output: "[1]"
          }
        ],
        constraints: [
          "The number of nodes in the list is the range [0, 5000].",
          "-5000 <= Node.val <= 5000"
        ],
        topics: ["Linked List", "Recursion"],
        acceptance: 73,
        submissions: 28e5,
        accepted: 2044e3,
        starterCode: {
          javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverseList(head) {
    // Write your code here
};`,
          python: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Write your code here
        pass`,
          java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your code here
    }
}`,
          cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { head: [1, 2, 3, 4, 5] }, expected: [5, 4, 3, 2, 1] },
          { input: { head: [1, 2, 3] }, expected: [3, 2, 1] },
          { input: { head: [1] }, expected: [1] },
          { input: { head: [] }, expected: [] }
        ]
      },
      {
        title: "Jump Game",
        slug: "jump-game",
        difficulty: "Medium",
        order: 3,
        videoId: "Yan0cv2cUCc",
        description: `You are given an integer array nums. You are initially positioned at the first index and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.`,
        examples: [
          {
            input: "nums = [2,3,1,1,4]",
            output: "true",
            explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
          },
          {
            input: "nums = [3,2,1,0,4]",
            output: "false",
            explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
          }
        ],
        constraints: [
          "1 <= nums.length <= 10^4",
          "0 <= nums[i] <= 10^5"
        ],
        topics: ["Array", "Dynamic Programming", "Greedy"],
        acceptance: 38,
        submissions: 21e5,
        accepted: 798e3,
        starterCode: {
          javascript: `function canJump(nums) {
    // Write your code here
};`,
          python: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean canJump(int[] nums) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [2, 3, 1, 1, 4] }, expected: true },
          { input: { nums: [3, 2, 1, 0, 4] }, expected: false },
          { input: { nums: [2, 0, 0] }, expected: true }
        ]
      },
      {
        title: "Palindrome Number",
        slug: "palindrome-number",
        difficulty: "Easy",
        order: 4,
        videoId: "yubRKwCPyAg",
        description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
        examples: [
          { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
          { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." }
        ],
        constraints: ["-2^31 <= x <= 2^31 - 1"],
        topics: ["Math"],
        starterCode: {
          javascript: `function isPalindrome(x) {
    // Write your code here
};`,
          python: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool isPalindrome(int x) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { x: 121 }, expected: true },
          { input: { x: -121 }, expected: false },
          { input: { x: 10 }, expected: false }
        ]
      },
      {
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        order: 5,
        videoId: "WTwjK_uyukU",
        description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
        examples: [
          { input: 's = "()"', output: "true" },
          { input: 's = "()[]{}"', output: "true" },
          { input: 's = "(]"', output: "false" }
        ],
        constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
        topics: ["String", "Stack"],
        starterCode: {
          javascript: `function isValid(s) {
    // Write your code here
};`,
          python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { s: "()" }, expected: true },
          { input: { s: "()[]{}" }, expected: true },
          { input: { s: "(]" }, expected: false }
        ]
      },
      {
        title: "Merge Two Sorted Lists",
        slug: "merge-two-sorted-lists",
        difficulty: "Easy",
        order: 6,
        videoId: "XIdigkFu7uM",
        description: `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists in a one sorted list.`,
        examples: [
          { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }
        ],
        constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 <= Node.val <= 100"],
        topics: ["Linked List", "Recursion"],
        starterCode: {
          javascript: `function mergeTwoLists(list1, list2) {
    // Write your code here
};`,
          python: `class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Write your code here
        pass`,
          java: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { list1: [1, 2, 4], list2: [1, 3, 4] }, expected: [1, 1, 2, 3, 4, 4] }
        ]
      },
      {
        title: "Maximum Subarray",
        slug: "maximum-subarray",
        difficulty: "Medium",
        order: 7,
        videoId: "5WZlOhjuU1w",
        description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
        examples: [
          { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." }
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
        topics: ["Array", "Divide and Conquer", "Dynamic Programming"],
        starterCode: {
          javascript: `function maxSubArray(nums) {
    // Write your code here
};`,
          python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expected: 6 },
          { input: { nums: [1] }, expected: 1 },
          { input: { nums: [5, 4, -1, 7, 8] }, expected: 23 }
        ]
      },
      {
        title: "Search Insert Position",
        slug: "search-insert-position",
        difficulty: "Easy",
        order: 8,
        videoId: "K-RYzDZkzCI",
        description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.`,
        examples: [
          { input: "nums = [1,3,5,6], target = 5", output: "2" },
          { input: "nums = [1,3,5,6], target = 2", output: "1" }
        ],
        constraints: ["1 <= nums.length <= 10^4", "-10^4 <= nums[i] <= 10^4", "nums contains distinct values sorted in ascending order."],
        topics: ["Array", "Binary Search"],
        starterCode: {
          javascript: `function searchInsert(nums, target) {
    // Write your code here
};`,
          python: `class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [1, 3, 5, 6], target: 5 }, expected: 2 },
          { input: { nums: [1, 3, 5, 6], target: 2 }, expected: 1 },
          { input: { nums: [1, 3, 5, 6], target: 7 }, expected: 4 }
        ]
      },
      {
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        difficulty: "Easy",
        order: 9,
        videoId: "yFE628G-_ko",
        description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
        examples: [
          { input: "n = 2", output: "2" },
          { input: "n = 3", output: "3" }
        ],
        constraints: ["1 <= n <= 45"],
        topics: ["Math", "Dynamic Programming", "Memoization"],
        starterCode: {
          javascript: `function climbStairs(n) {
    // Write your code here
};`,
          python: `class Solution:
    def climbStairs(self, n: int) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int climbStairs(int n) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { n: 2 }, expected: 2 },
          { input: { n: 3 }, expected: 3 }
        ]
      },
      {
        title: "Binary Tree Inorder Traversal",
        slug: "binary-tree-inorder-traversal",
        difficulty: "Easy",
        order: 10,
        videoId: "jzZgF8n2vRE",
        description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.`,
        examples: [
          { input: "root = [1,null,2,3]", output: "[1,3,2]" }
        ],
        constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
        topics: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function inorderTraversal(root) {
    // Write your code here
};`,
          python: `class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [1, null, 2, 3] }, expected: [1, 3, 2] }
        ]
      },
      {
        title: "Symmetric Tree",
        slug: "symmetric-tree",
        difficulty: "Easy",
        order: 11,
        videoId: "K7LyJT17u6E",
        description: `Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).`,
        examples: [
          { input: "root = [1,2,2,3,4,4,3]", output: "true" }
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 1000].", "-100 <= Node.val <= 100"],
        topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function isSymmetric(root) {
    // Write your code here
};`,
          python: `class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [1, 2, 2, 3, 4, 4, 3] }, expected: true }
        ]
      },
      {
        title: "Path Sum",
        slug: "path-sum",
        difficulty: "Easy",
        order: 12,
        videoId: "Hg82DzMemMI",
        description: `Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.`,
        examples: [
          { input: "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", output: "true" }
        ],
        constraints: ["The number of nodes in the tree is in the range [0, 5000].", "-1000 <= Node.val <= 1000", "-1000 <= targetSum <= 1000"],
        topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function hasPathSum(root, targetSum) {
    // Write your code here
};`,
          python: `class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum: 22 }, expected: true }
        ]
      },
      {
        title: "Search a 2D Matrix",
        slug: "search-a-2d-matrix",
        difficulty: "Medium",
        order: 13,
        videoId: "ZfFl4torNg4",
        description: `Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
  - Integers in each row are sorted from left to right.
  - The first integer of each row is greater than the last integer of the previous row.`,
        examples: [
          { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" }
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 100", "-10^4 <= matrix[i][j], target <= 10^4"],
        topics: ["Array", "Binary Search", "Matrix"],
        starterCode: {
          javascript: `function searchMatrix(matrix, target) {
    // Write your code here
};`,
          python: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3 }, expected: true }
        ]
      },
      {
        title: "Container With Most Water",
        slug: "container-with-most-water",
        difficulty: "Medium",
        order: 14,
        videoId: "UuiTKBwPgFY",
        description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
  Find two lines that together with the x-axis form a container, such that the container contains the most water.
  Return the maximum amount of water a container can store.`,
        examples: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }
        ],
        constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
        topics: ["Array", "Two Pointers", "Greedy"],
        starterCode: {
          javascript: `function maxArea(height) {
    // Write your code here
};`,
          python: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int maxArea(int[] height) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, expected: 49 }
        ]
      },
      {
        title: "Merge Intervals",
        slug: "merge-intervals",
        difficulty: "Medium",
        order: 15,
        videoId: "44H3cEC2fyg",
        description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
        examples: [
          { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
        ],
        constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^4"],
        topics: ["Array", "Sorting"],
        starterCode: {
          javascript: `function merge(intervals) {
    // Write your code here
};`,
          python: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Write your code here
        pass`,
          java: `class Solution {
    public int[][] merge(int[][] intervals) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { intervals: [[1, 3], [2, 6], [8, 10], [15, 18]] }, expected: [[1, 6], [8, 10], [15, 18]] }
        ]
      },
      {
        title: "Maximum Depth of Binary Tree",
        slug: "maximum-depth-of-binary-tree",
        difficulty: "Easy",
        order: 16,
        videoId: "hTM3phVI6YQ",
        description: `Given the root of a binary tree, return its maximum depth.
  A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
        examples: [
          { input: "root = [3,9,20,null,null,15,7]", output: "3" }
        ],
        constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-100 <= Node.val <= 100"],
        topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function maxDepth(root) {
    // Write your code here
};`,
          python: `class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int maxDepth(TreeNode root) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int maxDepth(TreeNode* root) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [3, 9, 20, null, null, 15, 7] }, expected: 3 }
        ]
      },
      {
        title: "Best Time to Buy and Sell Stock",
        slug: "best-time-to-buy-and-sell-stock",
        difficulty: "Easy",
        order: 17,
        videoId: "1pkOgXD63yU",
        description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.
  You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
  Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
        examples: [
          { input: "prices = [7,1,5,3,6,4]", output: "5" }
        ],
        constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
        topics: ["Array", "Dynamic Programming"],
        starterCode: {
          javascript: `function maxProfit(prices) {
    // Write your code here
};`,
          python: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { prices: [7, 1, 5, 3, 6, 4] }, expected: 5 }
        ]
      },
      {
        title: "Subsets",
        slug: "subsets",
        difficulty: "Medium",
        order: 18,
        videoId: "REOH22XQk1c",
        description: `Given an integer array nums of unique elements, return all possible subsets (the power set).
  The solution set must not contain duplicate subsets. Return the solution in any order.`,
        examples: [
          { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
        ],
        constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers of nums are unique."],
        topics: ["Array", "Backtracking", "Bit Manipulation"],
        starterCode: {
          javascript: `function subsets(nums) {
    // Write your code here
};`,
          python: `class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [1, 2, 3] }, expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] }
        ]
      },
      {
        title: "Longest Common Prefix",
        slug: "longest-common-prefix",
        difficulty: "Easy",
        order: 19,
        videoId: "0sWShKIJoo4",
        description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".`,
        examples: [
          { input: 'strs = ["flower","flow","flight"]', output: '"fl"' }
        ],
        constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200", "strs[i] consists of only lowercase English letters."],
        topics: ["String", "Trie"],
        starterCode: {
          javascript: `function longestCommonPrefix(strs) {
    // Write your code here
};`,
          python: `class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Write your code here
        pass`,
          java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { strs: ["flower", "flow", "flight"] }, expected: "fl" }
        ]
      },
      {
        title: "Single Number",
        slug: "single-number",
        difficulty: "Easy",
        order: 20,
        videoId: "qWPNUv-oAnQ",
        description: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
  You must implement a solution with a linear runtime complexity and use only constant extra space.`,
        examples: [
          { input: "nums = [2,2,1]", output: "1" }
        ],
        constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4", "Each element in the array appears twice except for one element which appears only once."],
        topics: ["Array", "Bit Manipulation"],
        starterCode: {
          javascript: `function singleNumber(nums) {
    // Write your code here
};`,
          python: `class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int singleNumber(vector<int>& nums) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [2, 2, 1] }, expected: 1 }
        ]
      },
      {
        title: "Valid Anagram",
        slug: "valid-anagram",
        difficulty: "Easy",
        order: 21,
        videoId: "g8T63iV1E4I",
        description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
        examples: [
          { input: 's = "anagram", t = "nagaram"', output: "true" }
        ],
        constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
        topics: ["Hash Table", "String", "Sorting"],
        starterCode: {
          javascript: `function isAnagram(s, t) {
    // Write your code here
};`,
          python: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { s: "anagram", t: "nagaram" }, expected: true }
        ]
      },
      {
        title: "Min Stack",
        slug: "min-stack",
        difficulty: "Medium",
        order: 22,
        videoId: "qkLl7nugYaw",
        description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
    Implement the MinStack class:
    - MinStack() initializes the stack object.
    - void push(int val) pushes the element val onto the stack.
    - void pop() removes the element on the top of the stack.
    - int top() gets the top element of the stack.
    - int getMin() retrieves the minimum element in the stack.`,
        examples: [
          { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', output: "[null,null,null,null,-3,null,0,-2]" }
        ],
        constraints: ["-2^31 <= val <= 2^31 - 1", "Methods pop, top and getMin operations will always be called on non-empty stacks.", "At most 3 * 10^4 calls will be made to push, pop, top, and getMin."],
        topics: ["Stack", "Design"],
        starterCode: {
          javascript: `var MinStack = function() {
    // Initialize your stack here
};

MinStack.prototype.push = function(val) {
    // Write your code here
};

MinStack.prototype.pop = function() {
    // Write your code here
};

MinStack.prototype.top = function() {
    // Write your code here
};

MinStack.prototype.getMin = function() {
    // Write your code here
};`,
          python: `class MinStack:
    def __init__(self):
        # Initialize your stack here
        pass

    def push(self, val: int) -> None:
        # Write your code here
        pass

    def pop(self) -> None:
        # Write your code here
        pass

    def top(self) -> int:
        # Write your code here
        pass

    def getMin(self) -> int:
        # Write your code here
        pass`,
          java: `class MinStack {
    public MinStack() {
        // Initialize your stack here
    }
    
    public void push(int val) {
        // Write your code here
    }
    
    public void pop() {
        // Write your code here
    }
    
    public int top() {
        // Write your code here
    }
    
    public int getMin() {
        // Write your code here
    }
}`,
          cpp: `class MinStack {
public:
    MinStack() {
        // Initialize your stack here
    }
    
    void push(int val) {
        // Write your code here
    }
    
    void pop() {
        // Write your code here
    }
    
    int top() {
        // Write your code here
    }
    
    int getMin() {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { operations: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], values: [[], [-2], [0], [-3], [], [], [], []] }, expected: [null, null, null, null, -3, null, 0, -2] }
        ]
      },
      {
        title: "Longest Palindromic Substring",
        slug: "longest-palindromic-substring",
        difficulty: "Medium",
        order: 23,
        videoId: "XYQEc14igLI",
        description: "Given a string s, return the longest palindromic substring in s.",
        examples: [
          { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' }
        ],
        constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."],
        topics: ["String", "Dynamic Programming"],
        starterCode: {
          javascript: `function longestPalindrome(s) {
    // Write your code here
};`,
          python: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Write your code here
        pass`,
          java: `class Solution {
    public String longestPalindrome(String s) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { s: "babad" }, expected: "bab" },
          { input: { s: "cbbd" }, expected: "bb" }
        ]
      },
      {
        title: "3Sum",
        slug: "3sum",
        difficulty: "Medium",
        order: 24,
        videoId: "jzZgF8n2vRE",
        description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
        examples: [
          { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
        ],
        constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
        topics: ["Array", "Two Pointers", "Sorting"],
        starterCode: {
          javascript: `function threeSum(nums) {
    // Write your code here
};`,
          python: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { nums: [-1, 0, 1, 2, -1, -4] }, expected: [[-1, -1, 2], [-1, 0, 1]] }
        ]
      },
      {
        title: "Rotate Image",
        slug: "rotate-image",
        difficulty: "Medium",
        order: 25,
        videoId: "fMSJSS7eO1w",
        description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
        examples: [
          { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }
        ],
        constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20", "-1000 <= matrix[i][j] <= 1000"],
        topics: ["Array", "Math", "Matrix"],
        starterCode: {
          javascript: `function rotate(matrix) {
    // Write your code here
};`,
          python: `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # Write your code here
        pass`,
          java: `class Solution {
    public void rotate(int[][] matrix) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] }
        ]
      },
      {
        title: "Group Anagrams",
        slug: "group-anagrams",
        difficulty: "Medium",
        order: 26,
        videoId: "vzdNOK2oB2E",
        description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
        examples: [
          { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }
        ],
        constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters."],
        topics: ["Array", "Hash Table", "String", "Sorting"],
        starterCode: {
          javascript: `function groupAnagrams(strs) {
    // Write your code here
};`,
          python: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] }, expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] }
        ]
      },
      {
        title: "Spiral Matrix",
        slug: "spiral-matrix",
        difficulty: "Medium",
        order: 27,
        videoId: "BJnMZNwUk1M",
        description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
        examples: [
          { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }
        ],
        constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10", "-100 <= matrix[i][j] <= 100"],
        topics: ["Array", "Matrix", "Simulation"],
        starterCode: {
          javascript: `function spiralOrder(matrix) {
    // Write your code here
};`,
          python: `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] }
        ]
      },
      {
        title: "Word Search",
        slug: "word-search",
        difficulty: "Medium",
        order: 28,
        videoId: "pfiQ_PS1g8E",
        description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
        examples: [
          { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }
        ],
        constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15"],
        topics: ["Array", "Backtracking", "Matrix"],
        starterCode: {
          javascript: `function exist(board, word) {
    // Write your code here
};`,
          python: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean exist(char[][] board, String word) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "ABCCED" }, expected: true }
        ]
      },
      {
        title: "Decode Ways",
        slug: "decode-ways",
        difficulty: "Medium",
        order: 29,
        videoId: "FEkZxCl_-ik",
        description: "A message containing letters from A-Z can be encoded into numbers using 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it.",
        examples: [
          { input: 's = "12"', output: "2", explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).' }
        ],
        constraints: ["1 <= s.length <= 100", "s contains only digits and may contain leading zero(s)."],
        topics: ["String", "Dynamic Programming"],
        starterCode: {
          javascript: `function numDecodings(s) {
    // Write your code here
};`,
          python: `class Solution:
    def numDecodings(self, s: str) -> int:
        # Write your code here
        pass`,
          java: `class Solution {
    public int numDecodings(String s) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    int numDecodings(string s) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { s: "12" }, expected: 2 },
          { input: { s: "226" }, expected: 3 }
        ]
      },
      {
        title: "Binary Tree Level Order Traversal",
        slug: "binary-tree-level-order-traversal",
        difficulty: "Medium",
        order: 30,
        videoId: "6ZnyEApgFYg",
        description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
        examples: [
          { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }
        ],
        constraints: ["The number of nodes in the tree is in the range [0, 2000].", "-1000 <= Node.val <= 1000"],
        topics: ["Tree", "Breadth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function levelOrder(root) {
    // Write your code here
};`,
          python: `class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # Write your code here
        pass`,
          java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [3, 9, 20, null, null, 15, 7] }, expected: [[3], [9, 20], [15, 7]] }
        ]
      },
      {
        title: "Validate Binary Search Tree",
        slug: "validate-binary-search-tree",
        difficulty: "Medium",
        order: 31,
        videoId: "s6ATEkipzow",
        description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
        examples: [
          { input: "root = [2,1,3]", output: "true" }
        ],
        constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-2^31 <= Node.val <= 2^31 - 1"],
        topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
        starterCode: {
          javascript: `function isValidBST(root) {
    // Write your code here
};`,
          python: `class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        # Write your code here
        pass`,
          java: `class Solution {
    public boolean isValidBST(TreeNode root) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [2, 1, 3] }, expected: true }
        ]
      },
      {
        title: "Lowest Common Ancestor of a Binary Tree",
        slug: "lowest-common-ancestor-of-a-binary-tree",
        difficulty: "Medium",
        order: 32,
        videoId: "13m9ZCB8gjw",
        description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
        examples: [
          { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" }
        ],
        constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p != q", "p and q will exist in the tree."],
        topics: ["Tree", "Depth-First Search", "Binary Tree"],
        starterCode: {
          javascript: `function lowestCommonAncestor(root, p, q) {
    // Write your code here
};`,
          python: `class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # Write your code here
        pass`,
          java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your code here
    }
}`,
          cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // Write your code here
    }
};`
        },
        testCases: [
          { input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1 }, expected: 3 }
        ]
      }
    ];
    sampleProblems2.forEach((problemData) => {
      this.createProblem(problemData);
    });
  }
  initializeContests() {
    const sampleContests = [
      {
        title: "Weekly Contest 1",
        description: "Join our first weekly coding contest! Solve 3 problems in 90 minutes.",
        startTime: new Date(Date.now() - 36e5),
        // Started 1 hour ago
        endTime: new Date(Date.now() + 36e5 * 24),
        // Ends in 24 hours
        problemIds: ["two-sum", "reverse-linked-list", "jump-game"],
        status: "ongoing"
      },
      {
        title: "Algorithms Cup",
        description: "A high-stakes algorithmic challenge for top developers.",
        startTime: new Date(Date.now() + 36e5 * 48),
        // Starts in 48 hours
        endTime: new Date(Date.now() + 36e5 * 50),
        problemIds: ["two-sum", "jump-game"],
        status: "upcoming"
      }
    ];
    sampleContests.forEach((contestData) => {
      this.createContest(contestData);
    });
  }
  initializeBadges() {
    const sampleBadges = [
      { name: "First Solve", description: "Solved your first problem!", image: "\u{1F947}", criteria: { type: "solved_count", count: 1 } },
      { name: "Algorithmist", description: "Solved 10 problems.", image: "\u{1F468}\u200D\u{1F4BB}", criteria: { type: "solved_count", count: 10 } },
      { name: "Daily Streak", description: "Maintained a 7-day streak!", image: "\u{1F525}", criteria: { type: "streak_count", count: 7 } }
    ];
    sampleBadges.forEach((badge) => {
      const id = randomUUID();
      this.badges.set(id, { ...badge, id });
    });
  }
  async getUser(id) {
    return this.users.get(id);
  }
  async getUserByEmail(email) {
    return Array.from(this.users.values()).find((user) => user.email === email);
  }
  async getUserByUsername(username) {
    return Array.from(this.users.values()).find((user) => user.username === username);
  }
  async createUser(insertUser) {
    const id = randomUUID();
    const user = {
      ...insertUser,
      id,
      avatar: insertUser.avatar || null,
      collegeId: insertUser.collegeId ?? null,
      githubToken: insertUser.githubToken ?? null,
      replitId: insertUser.replitId ?? null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.users.set(id, user);
    return user;
  }
  async getProblems() {
    return Array.from(this.problems.values());
  }
  async getProblem(id) {
    return this.problems.get(id);
  }
  async getProblemBySlug(slug) {
    return Array.from(this.problems.values()).find((problem) => problem.slug === slug);
  }
  async createProblem(insertProblem) {
    const id = randomUUID();
    const problem = {
      id,
      title: insertProblem.title,
      slug: insertProblem.slug,
      difficulty: insertProblem.difficulty,
      description: insertProblem.description,
      examples: insertProblem.examples ?? [],
      constraints: insertProblem.constraints ?? [],
      topics: insertProblem.topics ?? [],
      acceptance: insertProblem.acceptance ?? 0,
      submissions: insertProblem.submissions ?? 0,
      accepted: insertProblem.accepted ?? 0,
      likes: insertProblem.likes ?? 0,
      dislikes: insertProblem.dislikes ?? 0,
      starterCode: insertProblem.starterCode ?? {},
      testCases: insertProblem.testCases ?? [],
      order: insertProblem.order ?? 0,
      videoId: insertProblem.videoId ?? null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.problems.set(id, problem);
    return problem;
  }
  async getSubmissions(userId, problemId) {
    const submissions2 = Array.from(this.submissions.values()).filter(
      (submission) => submission.userId === userId && (!problemId || submission.problemId === problemId)
    );
    return submissions2;
  }
  async getSubmissionsWithDetails(userId) {
    const submissions2 = Array.from(this.submissions.values()).filter((submission) => submission.userId === userId).sort((a, b) => (a.createdAt?.getTime() || 0) - (b.createdAt?.getTime() || 0));
    const problemAttempts = /* @__PURE__ */ new Map();
    const detailedSubmissions = submissions2.map((submission) => {
      const problem = this.problems.get(submission.problemId);
      const attemptNumber = (problemAttempts.get(submission.problemId) || 0) + 1;
      problemAttempts.set(submission.problemId, attemptNumber);
      return {
        ...submission,
        problemTitle: problem?.title || "Unknown Problem",
        problemSlug: problem?.slug || "",
        attemptNumber
      };
    });
    return detailedSubmissions.sort((a, b) => (b.createdAt?.getTime() || 0) - (a.createdAt?.getTime() || 0));
  }
  async createSubmission(insertSubmission) {
    const id = randomUUID();
    const submission = {
      ...insertSubmission,
      id,
      passedCount: insertSubmission.passedCount || 0,
      totalCount: insertSubmission.totalCount || 0,
      runtime: insertSubmission.runtime || null,
      memory: insertSubmission.memory || null,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.submissions.set(id, submission);
    return submission;
  }
  async getUserProblem(userId, problemId) {
    const key = `${userId}-${problemId}`;
    return this.userProblems.get(key);
  }
  async createUserProblem(insertUserProblem) {
    const id = randomUUID();
    const userProblem = {
      ...insertUserProblem,
      id,
      liked: insertUserProblem.liked ?? false,
      disliked: insertUserProblem.disliked ?? false,
      starred: insertUserProblem.starred ?? false,
      solved: insertUserProblem.solved ?? false,
      attempts: insertUserProblem.attempts ?? 0,
      lastAttemptAt: insertUserProblem.lastAttemptAt ?? null
    };
    const key = `${userProblem.visitorId}-${userProblem.problemSlug}`;
    this.userProblems.set(key, userProblem);
    return userProblem;
  }
  async updateUserProblem(userId, problemId, updates) {
    const key = `${userId}-${problemId}`;
    const existing = this.userProblems.get(key);
    if (!existing) {
      throw new Error("UserProblem not found");
    }
    const updated = { ...existing, ...updates };
    this.userProblems.set(key, updated);
    return updated;
  }
  async getUserProblemInteraction(visitorId, problemSlug) {
    const key = `${visitorId}-${problemSlug}`;
    return this.userInteractions.get(key) || { liked: false, disliked: false, starred: false, solved: false };
  }
  async toggleLike(visitorId, problemSlug) {
    const key = `${visitorId}-${problemSlug}`;
    const current = this.userInteractions.get(key) || { liked: false, disliked: false, starred: false, solved: false };
    const wasLiked = current.liked;
    const wasDisliked = current.disliked;
    current.liked = !wasLiked;
    if (current.liked && wasDisliked) {
      current.disliked = false;
    }
    this.userInteractions.set(key, current);
    const problem = await this.getProblemBySlug(problemSlug);
    if (problem) {
      let likes = problem.likes || 0;
      let dislikes = problem.dislikes || 0;
      if (wasLiked) {
        likes = Math.max(0, likes - 1);
      } else {
        likes += 1;
        if (wasDisliked) {
          dislikes = Math.max(0, dislikes - 1);
        }
      }
      const updatedProblem = { ...problem, likes, dislikes };
      this.problems.set(problem.id, updatedProblem);
      return { liked: current.liked, disliked: current.disliked, likes, dislikes };
    }
    return current;
  }
  async toggleDislike(visitorId, problemSlug) {
    const key = `${visitorId}-${problemSlug}`;
    const current = this.userInteractions.get(key) || { liked: false, disliked: false, starred: false, solved: false };
    const wasLiked = current.liked;
    const wasDisliked = current.disliked;
    current.disliked = !wasDisliked;
    if (current.disliked && wasLiked) {
      current.liked = false;
    }
    this.userInteractions.set(key, current);
    const problem = await this.getProblemBySlug(problemSlug);
    if (problem) {
      let likes = problem.likes || 0;
      let dislikes = problem.dislikes || 0;
      if (wasDisliked) {
        dislikes = Math.max(0, dislikes - 1);
      } else {
        dislikes += 1;
        if (wasLiked) {
          likes = Math.max(0, likes - 1);
        }
      }
      const updatedProblem = { ...problem, likes, dislikes };
      this.problems.set(problem.id, updatedProblem);
      return { liked: current.liked, disliked: current.disliked, likes, dislikes };
    }
    return current;
  }
  async toggleStar(visitorId, problemSlug) {
    const key = `${visitorId}-${problemSlug}`;
    const current = this.userInteractions.get(key) || { liked: false, disliked: false, starred: false, solved: false };
    current.starred = !current.starred;
    this.userInteractions.set(key, current);
    return { starred: current.starred };
  }
  async getAllInteractions(visitorId) {
    const result = [];
    const problems2 = await this.getProblems();
    const entries = Array.from(this.userInteractions.entries());
    for (const [key, interaction] of entries) {
      if (key.startsWith(`${visitorId}-`)) {
        const problemSlug = key.replace(`${visitorId}-`, "");
        const problem = problems2.find((p) => p.slug === problemSlug);
        if (problem && (interaction.liked || interaction.disliked || interaction.starred)) {
          result.push({
            problemSlug,
            problemTitle: problem.title,
            difficulty: problem.difficulty,
            ...interaction
          });
        }
      }
    }
    return result;
  }
  // Contest methods
  async getContests() {
    return Array.from(this.contests.values());
  }
  async getContest(id) {
    return this.contests.get(id);
  }
  async createContest(insertContest) {
    const id = randomUUID();
    const contest = {
      ...insertContest,
      id,
      description: insertContest.description ?? null,
      problemIds: insertContest.problemIds ?? [],
      status: insertContest.status ?? "upcoming",
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contests.set(id, contest);
    return contest;
  }
  async getContestParticipants(contestId) {
    return Array.from(this.contestParticipants.values()).filter((p) => p.contestId === contestId);
  }
  async joinContest(participant) {
    const id = randomUUID();
    const cp = {
      ...participant,
      id,
      score: 0,
      rank: null,
      submissions: [],
      joinedAt: /* @__PURE__ */ new Date(),
      blockchainHash: null
    };
    this.contestParticipants.set(id, cp);
    return cp;
  }
  async updateContestParticipant(contestId, userId, updates) {
    const participant = Array.from(this.contestParticipants.values()).find((p) => p.contestId === contestId && p.userId === userId);
    if (!participant) throw new Error("Participant not found");
    const updated = { ...participant, ...updates };
    this.contestParticipants.set(participant.id, updated);
    return updated;
  }
  // Gamification & Streaks
  async getUserStreak(userId) {
    return this.userStreaks.get(userId);
  }
  async updateUserStreak(userId) {
    const current = this.userStreaks.get(userId) || { id: randomUUID(), userId, currentStreak: 0, longestStreak: 0, lastSubmissionAt: null };
    const now = /* @__PURE__ */ new Date();
    const lastAt = current.lastSubmissionAt;
    let currentStreak = current.currentStreak ?? 0;
    let longestStreak = current.longestStreak ?? 0;
    if (!lastAt) {
      currentStreak = 1;
    } else {
      const diff = now.getTime() - lastAt.getTime();
      const diffDays = diff / (1e3 * 3600 * 24);
      if (diffDays < 1) {
      } else if (diffDays < 2) {
        currentStreak += 1;
      } else {
        currentStreak = 1;
      }
    }
    if (currentStreak > longestStreak) longestStreak = currentStreak;
    current.currentStreak = currentStreak;
    current.longestStreak = longestStreak;
    current.lastSubmissionAt = now;
    this.userStreaks.set(userId, current);
    return current;
  }
  async getBadges() {
    return Array.from(this.badges.values());
  }
  async getUserBadges(userId) {
    return Array.from(this.userBadges.values()).filter((b) => b.userId === userId);
  }
  async awardBadge(userId, badgeId) {
    const id = randomUUID();
    const ub = { id, userId, badgeId, earnedAt: /* @__PURE__ */ new Date() };
    this.userBadges.set(id, ub);
    return ub;
  }
  async getRewardPoints(userId) {
    return this.rewardPoints.get(userId);
  }
  async addRewardPoints(userId, points) {
    const current = this.rewardPoints.get(userId) || { id: randomUUID(), userId, points: 0, updatedAt: /* @__PURE__ */ new Date() };
    current.points = (current.points ?? 0) + points;
    current.updatedAt = /* @__PURE__ */ new Date();
    this.rewardPoints.set(userId, current);
    return current;
  }
  async updateUser(id, updates) {
    const user = this.users.get(id);
    if (!user) throw new Error("User not found");
    const updated = { ...user, ...updates };
    this.users.set(id, updated);
    return updated;
  }
  async getColleges() {
    return Array.from(this.colleges.values());
  }
  async getCollege(id) {
    return this.colleges.get(id);
  }
  async getCollegeBySlug(slug) {
    return Array.from(this.colleges.values()).find((c) => c.slug === slug);
  }
  async createCollege(college) {
    const id = randomUUID();
    const c = { ...college, id, createdAt: /* @__PURE__ */ new Date() };
    this.colleges.set(id, c);
    return c;
  }
  async getLearningPaths() {
    return Array.from(this.learningPaths.values());
  }
  async getLearningPath(id) {
    return this.learningPaths.get(id);
  }
  async createLearningPath(path) {
    const id = randomUUID();
    const p = { ...path, id, createdAt: /* @__PURE__ */ new Date() };
    this.learningPaths.set(id, p);
    return p;
  }
  async getUserLearningPaths(userId) {
    return Array.from(this.userLearningPaths.values()).filter((p) => p.userId === userId);
  }
  async updateUserLearningPath(userId, pathId, updates) {
    const key = `${userId}-${pathId}`;
    const existing = Array.from(this.userLearningPaths.values()).find((p) => p.userId === userId && p.pathId === pathId);
    if (!existing) {
      const id = randomUUID();
      const p = { id, userId, pathId, progress: 0, completed: false, lastActivity: /* @__PURE__ */ new Date(), ...updates };
      this.userLearningPaths.set(id, p);
      return p;
    }
    const updated = { ...existing, ...updates, lastActivity: /* @__PURE__ */ new Date() };
    this.userLearningPaths.set(existing.id, updated);
    return updated;
  }
  async getJobSimulations() {
    return Array.from(this.jobSimulations.values());
  }
  async getJobSimulation(id) {
    return this.jobSimulations.get(id);
  }
  async createJobSimulation(simulation) {
    const id = randomUUID();
    const s = { ...simulation, id, createdAt: /* @__PURE__ */ new Date() };
    this.jobSimulations.set(id, s);
    return s;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, json, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: text("email").notNull().unique(),
  username: text("username").notNull().unique(),
  displayName: text("display_name").notNull(),
  avatar: text("avatar"),
  createdAt: timestamp("created_at").defaultNow(),
  collegeId: varchar("college_id"),
  githubToken: text("github_token"),
  replitId: text("replit_id")
});
var colleges = pgTable("colleges", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  logo: text("logo"),
  domain: text("domain"),
  createdAt: timestamp("created_at").defaultNow()
});
var learningPaths = pgTable("learning_paths", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  image: text("image"),
  problems: json("problems").notNull().default([]),
  // Array of { problemId: string, order: number }
  createdAt: timestamp("created_at").defaultNow()
});
var userLearningPaths = pgTable("user_learning_paths", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  pathId: varchar("path_id").notNull().references(() => learningPaths.id),
  progress: integer("progress").default(0),
  // percentage
  completed: boolean("completed").default(false),
  lastActivity: timestamp("last_activity").defaultNow()
});
var jobSimulations = pgTable("job_simulations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  companyName: text("company_name").notNull(),
  logo: text("logo"),
  role: text("role").notNull(),
  description: text("description"),
  problemIds: text("problem_ids").array().default([]),
  duration: integer("duration"),
  // in minutes
  createdAt: timestamp("created_at").defaultNow()
});
var insertCollegeSchema = createInsertSchema(colleges).omit({
  id: true,
  createdAt: true
});
var insertLearningPathSchema = createInsertSchema(learningPaths).omit({
  id: true,
  createdAt: true
});
var insertJobSimulationSchema = createInsertSchema(jobSimulations).omit({
  id: true,
  createdAt: true
});
var problems = pgTable("problems", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  difficulty: text("difficulty").notNull(),
  // "Easy", "Medium", "Hard"
  description: text("description").notNull(),
  examples: json("examples").notNull().default([]),
  constraints: text("constraints").array(),
  topics: text("topics").array().default([]),
  acceptance: integer("acceptance").default(0),
  submissions: integer("submissions").default(0),
  accepted: integer("accepted").default(0),
  likes: integer("likes").default(0),
  dislikes: integer("dislikes").default(0),
  starterCode: json("starter_code").notNull().default({}),
  // { javascript: "", python: "", etc }
  testCases: json("test_cases").notNull().default([]),
  order: integer("order").default(0),
  videoId: text("video_id"),
  createdAt: timestamp("created_at").defaultNow()
});
var submissions = pgTable("submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  problemId: varchar("problem_id").notNull().references(() => problems.id),
  language: text("language").notNull(),
  code: text("code").notNull(),
  status: text("status").notNull(),
  // "Accepted", "Wrong Answer", "Runtime Error", etc
  passedCount: integer("passed_count").default(0),
  totalCount: integer("total_count").default(0),
  runtime: integer("runtime"),
  memory: integer("memory"),
  createdAt: timestamp("created_at").defaultNow()
});
var userProblems = pgTable("user_problems", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  visitorId: varchar("visitor_id").notNull(),
  problemSlug: text("problem_slug").notNull(),
  liked: boolean("liked").default(false),
  disliked: boolean("disliked").default(false),
  starred: boolean("starred").default(false),
  solved: boolean("solved").default(false),
  attempts: integer("attempts").default(0),
  lastAttemptAt: timestamp("last_attempt_at")
});
var contests = pgTable("contests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description"),
  startTime: timestamp("start_time").notNull(),
  endTime: timestamp("end_time").notNull(),
  problemIds: text("problem_ids").array().default([]),
  // Array of problem IDs
  status: text("status").notNull().default("upcoming"),
  // "upcoming", "ongoing", "finished"
  createdAt: timestamp("created_at").defaultNow()
});
var contestParticipants = pgTable("contest_participants", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  contestId: varchar("contest_id").notNull().references(() => contests.id),
  userId: varchar("user_id").notNull(),
  // Can be visitorId or userId
  score: integer("score").default(0),
  rank: integer("rank"),
  submissions: json("submissions").notNull().default([]),
  // Array of submission objects
  joinedAt: timestamp("joined_at").defaultNow(),
  blockchainHash: text("blockchain_hash")
  // For blockchain secured results
});
var badges = pgTable("badges", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  description: text("description"),
  image: text("image"),
  criteria: json("criteria").notNull()
  // e.g. { type: "solved_count", count: 50 }
});
var userBadges = pgTable("user_badges", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull(),
  badgeId: varchar("badge_id").notNull().references(() => badges.id),
  earnedAt: timestamp("earned_at").defaultNow()
});
var userStreaks = pgTable("user_streaks", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().unique(),
  currentStreak: integer("current_streak").default(0),
  longestStreak: integer("longest_streak").default(0),
  lastSubmissionAt: timestamp("last_submission_at")
});
var rewardPoints = pgTable("reward_points", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().unique(),
  points: integer("points").default(0),
  updatedAt: timestamp("updated_at").defaultNow()
});
var insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true
});
var insertProblemSchema = createInsertSchema(problems).omit({
  id: true,
  createdAt: true
});
var insertSubmissionSchema = createInsertSchema(submissions).omit({
  id: true,
  createdAt: true
});
var insertUserProblemSchema = createInsertSchema(userProblems).omit({
  id: true
});
var insertContestSchema = createInsertSchema(contests).omit({
  id: true,
  createdAt: true
});
var insertContestParticipantSchema = createInsertSchema(contestParticipants).omit({
  id: true,
  joinedAt: true
});
var insertBadgeSchema = createInsertSchema(badges).omit({
  id: true
});
var insertUserBadgeSchema = createInsertSchema(userBadges).omit({
  id: true,
  earnedAt: true
});
var insertUserStreakSchema = createInsertSchema(userStreaks).omit({
  id: true
});
var insertRewardPointsSchema = createInsertSchema(rewardPoints).omit({
  id: true
});

// shared/problems.ts
var sampleProblems = [
  {
    title: "Two Sum",
    slug: "two-sum",
    difficulty: "Easy",
    order: 1,
    videoId: "8-k1C6ehKuw",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.`,
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]"
      }
    ],
    constraints: [
      "2 \u2264 nums.length \u2264 10\u2074",
      "-10\u2079 \u2264 nums[i] \u2264 10\u2079",
      "-10\u2079 \u2264 target \u2264 10\u2079",
      "Only one valid answer exists."
    ],
    topics: ["Array", "Hash Table"],
    acceptance: 49,
    submissions: 52e5,
    accepted: 26e5,
    starterCode: {
      javascript: `function twoSum(nums, target) {
    // Write your code here
};`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Write your code here
        pass`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [2, 7, 11, 15], target: 9 }, expected: [0, 1] },
      { input: { nums: [3, 2, 4], target: 6 }, expected: [1, 2] }
    ]
  },
  {
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    difficulty: "Easy",
    order: 2,
    videoId: "G0_I-ZF0S38",
    description: `Given the head of a singly linked list, reverse the list, and return the reversed list.`,
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
        explanation: "The linked list is reversed."
      },
      {
        input: "head = [1,2,3]",
        output: "[3,2,1]"
      },
      {
        input: "head = [1]",
        output: "[1]"
      }
    ],
    constraints: [
      "The number of nodes in the list is the range [0, 5000].",
      "-5000 <= Node.val <= 5000"
    ],
    topics: ["Linked List", "Recursion"],
    acceptance: 73,
    submissions: 28e5,
    accepted: 2044e3,
    starterCode: {
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverseList(head) {
    // Write your code here
};`,
      python: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Write your code here
        pass`,
      java: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode reverseList(ListNode head) {
        // Write your code here
    }
}`,
      cpp: `/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { head: [1, 2, 3, 4, 5] }, expected: [5, 4, 3, 2, 1] },
      { input: { head: [1, 2, 3] }, expected: [3, 2, 1] },
      { input: { head: [1] }, expected: [1] },
      { input: { head: [] }, expected: [] }
    ]
  },
  {
    title: "Jump Game",
    slug: "jump-game",
    difficulty: "Medium",
    order: 3,
    videoId: "Yan0cv2cUCc",
    description: `You are given an integer array nums. You are initially positioned at the first index and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.`,
    examples: [
      {
        input: "nums = [2,3,1,1,4]",
        output: "true",
        explanation: "Jump 1 step from index 0 to 1, then 3 steps to the last index."
      },
      {
        input: "nums = [3,2,1,0,4]",
        output: "false",
        explanation: "You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index."
      }
    ],
    constraints: [
      "1 <= nums.length <= 10^4",
      "0 <= nums[i] <= 10^5"
    ],
    topics: ["Array", "Dynamic Programming", "Greedy"],
    acceptance: 38,
    submissions: 21e5,
    accepted: 798e3,
    starterCode: {
      javascript: `function canJump(nums) {
    // Write your code here
};`,
      python: `class Solution:
    def canJump(self, nums: List[int]) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean canJump(int[] nums) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool canJump(vector<int>& nums) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [2, 3, 1, 1, 4] }, expected: true },
      { input: { nums: [3, 2, 1, 0, 4] }, expected: false },
      { input: { nums: [2, 0, 0] }, expected: true }
    ]
  },
  {
    title: "Palindrome Number",
    slug: "palindrome-number",
    difficulty: "Easy",
    order: 4,
    videoId: "yubRKwCPyAg",
    description: `Given an integer x, return true if x is a palindrome, and false otherwise.`,
    examples: [
      { input: "x = 121", output: "true", explanation: "121 reads as 121 from left to right and from right to left." },
      { input: "x = -121", output: "false", explanation: "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome." }
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    topics: ["Math"],
    starterCode: {
      javascript: `function isPalindrome(x) {
    // Write your code here
};`,
      python: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean isPalindrome(int x) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(int x) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { x: 121 }, expected: true },
      { input: { x: -121 }, expected: false },
      { input: { x: 10 }, expected: false }
    ]
  },
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    difficulty: "Easy",
    order: 5,
    videoId: "WTwjK_uyukU",
    description: `Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.`,
    examples: [
      { input: 's = "()"', output: "true" },
      { input: 's = "()[]{}"', output: "true" },
      { input: 's = "(]"', output: "false" }
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    topics: ["String", "Stack"],
    starterCode: {
      javascript: `function isValid(s) {
    // Write your code here
};`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { s: "()" }, expected: true },
      { input: { s: "()[]{}" }, expected: true },
      { input: { s: "(]" }, expected: false }
    ]
  },
  {
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    difficulty: "Easy",
    order: 6,
    videoId: "XIdigkFu7uM",
    description: `You are given the heads of two sorted linked lists list1 and list2. Merge the two lists into one sorted list.`,
    examples: [
      { input: "list1 = [1,2,4], list2 = [1,3,4]", output: "[1,1,2,3,4,4]" }
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 <= Node.val <= 100"],
    topics: ["Linked List", "Recursion"],
    starterCode: {
      javascript: `function mergeTwoLists(list1, list2) {
    // Write your code here
};`,
      python: `class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Write your code here
        pass`,
      java: `class Solution {
    public ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { list1: [1, 2, 4], list2: [1, 3, 4] }, expected: [1, 1, 2, 3, 4, 4] }
    ]
  },
  {
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    difficulty: "Medium",
    order: 7,
    videoId: "5WZlOhjuU1w",
    description: `Given an integer array nums, find the subarray with the largest sum, and return its sum.`,
    examples: [
      { input: "nums = [-2,1,-3,4,-1,2,1,-5,4]", output: "6", explanation: "The subarray [4,-1,2,1] has the largest sum 6." }
    ],
    constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
    topics: ["Array", "Divide and Conquer", "Dynamic Programming"],
    starterCode: {
      javascript: `function maxSubArray(nums) {
    // Write your code here
};`,
      python: `class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4] }, expected: 6 },
      { input: { nums: [1] }, expected: 1 },
      { input: { nums: [5, 4, -1, 7, 8] }, expected: 23 }
    ]
  },
  {
    title: "Search Insert Position",
    slug: "search-insert-position",
    difficulty: "Easy",
    order: 8,
    videoId: "K-RYzDZkzCI",
    description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.`,
    examples: [
      { input: "nums = [1,3,5,6], target = 5", output: "2" },
      { input: "nums = [1,3,5,6], target = 2", output: "1" }
    ],
    constraints: ["1 <= nums.length <= 10^4", "-10^4 <= nums[i] <= 10^4", "nums contains distinct values sorted in ascending order."],
    topics: ["Array", "Binary Search"],
    starterCode: {
      javascript: `function searchInsert(nums, target) {
    // Write your code here
};`,
      python: `class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int searchInsert(int[] nums, int target) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int searchInsert(vector<int>& nums, int target) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [1, 3, 5, 6], target: 5 }, expected: 2 },
      { input: { nums: [1, 3, 5, 6], target: 2 }, expected: 1 },
      { input: { nums: [1, 3, 5, 6], target: 7 }, expected: 4 }
    ]
  },
  {
    title: "Climbing Stairs",
    slug: "climbing-stairs",
    difficulty: "Easy",
    order: 9,
    videoId: "yFE628G-_ko",
    description: `You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?`,
    examples: [
      { input: "n = 2", output: "2" },
      { input: "n = 3", output: "3" }
    ],
    constraints: ["1 <= n <= 45"],
    topics: ["Math", "Dynamic Programming", "Memoization"],
    starterCode: {
      javascript: `function climbStairs(n) {
    // Write your code here
};`,
      python: `class Solution:
    def climbStairs(self, n: int) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int climbStairs(int n) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { n: 2 }, expected: 2 },
      { input: { n: 3 }, expected: 3 }
    ]
  },
  {
    title: "Binary Tree Inorder Traversal",
    slug: "binary-tree-inorder-traversal",
    difficulty: "Easy",
    order: 10,
    videoId: "jzZgF8n2vRE",
    description: `Given the root of a binary tree, return the inorder traversal of its nodes' values.`,
    examples: [
      { input: "root = [1,null,2,3]", output: "[1,3,2]" }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 100].", "-100 <= Node.val <= 100"],
    topics: ["Stack", "Tree", "Depth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function inorderTraversal(root) {
    // Write your code here
};`,
      python: `class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<Integer> inorderTraversal(TreeNode root) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<int> inorderTraversal(TreeNode* root) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [1, null, 2, 3] }, expected: [1, 3, 2] }
    ]
  },
  {
    title: "Symmetric Tree",
    slug: "symmetric-tree",
    difficulty: "Easy",
    order: 11,
    videoId: "K7LyJT17u6E",
    description: `Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).`,
    examples: [
      { input: "root = [1,2,2,3,4,4,3]", output: "true" }
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 1000].", "-100 <= Node.val <= 100"],
    topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function isSymmetric(root) {
    // Write your code here
};`,
      python: `class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean isSymmetric(TreeNode root) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool isSymmetric(TreeNode* root) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [1, 2, 2, 3, 4, 4, 3] }, expected: true }
    ]
  },
  {
    title: "Path Sum",
    slug: "path-sum",
    difficulty: "Easy",
    order: 12,
    videoId: "Hg82DzMemMI",
    description: `Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.`,
    examples: [
      { input: "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22", output: "true" }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 5000].", "-1000 <= Node.val <= 1000", "-1000 <= targetSum <= 1000"],
    topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function hasPathSum(root, targetSum) {
    // Write your code here
};`,
      python: `class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean hasPathSum(TreeNode root, int targetSum) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool hasPathSum(TreeNode* root, int targetSum) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1], targetSum: 22 }, expected: true }
    ]
  },
  {
    title: "Search a 2D Matrix",
    slug: "search-a-2d-matrix",
    difficulty: "Medium",
    order: 13,
    videoId: "ZfFl4torNg4",
    description: `Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:
- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.`,
    examples: [
      { input: "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3", output: "true" }
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 100", "-10^4 <= matrix[i][j], target <= 10^4"],
    topics: ["Array", "Binary Search", "Matrix"],
    starterCode: {
      javascript: `function searchMatrix(matrix, target) {
    // Write your code here
};`,
      python: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { matrix: [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target: 3 }, expected: true }
    ]
  },
  {
    title: "Container With Most Water",
    slug: "container-with-most-water",
    difficulty: "Medium",
    order: 14,
    videoId: "UuiTKBwPgFY",
    description: `You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.`,
    examples: [
      { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49" }
    ],
    constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
    topics: ["Array", "Two Pointers", "Greedy"],
    starterCode: {
      javascript: `function maxArea(height) {
    // Write your code here
};`,
      python: `class Solution:
    def maxArea(self, height: List[int]) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int maxArea(int[] height) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { height: [1, 8, 6, 2, 5, 4, 8, 3, 7] }, expected: 49 }
    ]
  },
  {
    title: "Merge Intervals",
    slug: "merge-intervals",
    difficulty: "Medium",
    order: 15,
    videoId: "44H3cEC2fyg",
    description: `Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.`,
    examples: [
      { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]" }
    ],
    constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2", "0 <= starti <= endi <= 10^4"],
    topics: ["Array", "Sorting"],
    starterCode: {
      javascript: `function merge(intervals) {
    // Write your code here
};`,
      python: `class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        # Write your code here
        pass`,
      java: `class Solution {
    public int[][] merge(int[][] intervals) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { intervals: [[1, 3], [2, 6], [8, 10], [15, 18]] }, expected: [[1, 6], [8, 10], [15, 18]] }
    ]
  },
  {
    title: "Maximum Depth of Binary Tree",
    slug: "maximum-depth-of-binary-tree",
    difficulty: "Easy",
    order: 16,
    videoId: "hTM3phVI6YQ",
    description: `Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.`,
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "3" }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 10^4].", "-100 <= Node.val <= 100"],
    topics: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function maxDepth(root) {
    // Write your code here
};`,
      python: `class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int maxDepth(TreeNode root) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int maxDepth(TreeNode* root) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expected: 3 }
    ]
  },
  {
    title: "Best Time to Buy and Sell Stock",
    slug: "best-time-to-buy-and-sell-stock",
    difficulty: "Easy",
    order: 17,
    videoId: "1pkOgXD63yU",
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
    examples: [
      { input: "prices = [7,1,5,3,6,4]", output: "5" }
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    topics: ["Array", "Dynamic Programming"],
    starterCode: {
      javascript: `function maxProfit(prices) {
    // Write your code here
};`,
      python: `class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { prices: [7, 1, 5, 3, 6, 4] }, expected: 5 }
    ]
  },
  {
    title: "Subsets",
    slug: "subsets",
    difficulty: "Medium",
    order: 18,
    videoId: "REOH22XQk1c",
    description: `Given an integer array nums of unique elements, return all possible subsets (the power set).
The solution set must not contain duplicate subsets. Return the solution in any order.`,
    examples: [
      { input: "nums = [1,2,3]", output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]" }
    ],
    constraints: ["1 <= nums.length <= 10", "-10 <= nums[i] <= 10", "All the numbers of nums are unique."],
    topics: ["Array", "Backtracking", "Bit Manipulation"],
    starterCode: {
      javascript: `function subsets(nums) {
    // Write your code here
};`,
      python: `class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> subsets(vector<int>& nums) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [1, 2, 3] }, expected: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]] }
    ]
  },
  {
    title: "Longest Common Prefix",
    slug: "longest-common-prefix",
    difficulty: "Easy",
    order: 19,
    videoId: "0sWShKIJoo4",
    description: `Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".`,
    examples: [
      { input: 'strs = ["flower","flow","flight"]', output: '"fl"' }
    ],
    constraints: ["1 <= strs.length <= 200", "0 <= strs[i].length <= 200", "strs[i] consists of only lowercase English letters."],
    topics: ["String", "Trie"],
    starterCode: {
      javascript: `function longestCommonPrefix(strs) {
    // Write your code here
};`,
      python: `class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # Write your code here
        pass`,
      java: `class Solution {
    public String longestCommonPrefix(String[] strs) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { strs: ["flower", "flow", "flight"] }, expected: "fl" }
    ]
  },
  {
    title: "Single Number",
    slug: "single-number",
    difficulty: "Easy",
    order: 20,
    videoId: "qWPNUv-oAnQ",
    description: `Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.`,
    examples: [
      { input: "nums = [2,2,1]", output: "1" }
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-3 * 10^4 <= nums[i] <= 3 * 10^4", "Each element in the array appears twice except for one element which appears only once."],
    topics: ["Array", "Bit Manipulation"],
    starterCode: {
      javascript: `function singleNumber(nums) {
    // Write your code here
};`,
      python: `class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int singleNumber(int[] nums) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int singleNumber(vector<int>& nums) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [2, 2, 1] }, expected: 1 }
    ]
  },
  {
    title: "Valid Anagram",
    slug: "valid-anagram",
    difficulty: "Easy",
    order: 21,
    videoId: "g8T63iV1E4I",
    description: `Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.`,
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: "true" }
    ],
    constraints: ["1 <= s.length, t.length <= 5 * 10^4", "s and t consist of lowercase English letters."],
    topics: ["Hash Table", "String", "Sorting"],
    starterCode: {
      javascript: `function isAnagram(s, t) {
    // Write your code here
};`,
      python: `class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { s: "anagram", t: "nagaram" }, expected: true }
    ]
  },
  {
    title: "Min Stack",
    slug: "min-stack",
    difficulty: "Medium",
    order: 22,
    videoId: "qkLl7nugYaw",
    description: `Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
- MinStack() initializes the stack object.
- void push(int val) pushes the element val onto the stack.
- void pop() removes the element on the top of the stack.
- int top() gets the top element of the stack.
- int getMin() retrieves the minimum element in the stack.`,
    examples: [
      { input: '["MinStack","push","push","push","getMin","pop","top","getMin"]\n[[],[-2],[0],[-3],[],[],[],[]]', output: "[null,null,null,null,-3,null,0,-2]" }
    ],
    constraints: ["-2^31 <= val <= 2^31 - 1", "Methods pop, top and getMin operations will always be called on non-empty stacks.", "At most 3 * 10^4 calls will be made to push, pop, top, and getMin."],
    topics: ["Stack", "Design"],
    starterCode: {
      javascript: `var MinStack = function() {
    // Initialize your stack here
};

MinStack.prototype.push = function(val) {
    // Write your code here
};

MinStack.prototype.pop = function() {
    // Write your code here
};

MinStack.prototype.top = function() {
    // Write your code here
};

MinStack.prototype.getMin = function() {
    // Write your code here
};`,
      python: `class MinStack:
    def __init__(self):
        # Initialize your stack here
        pass

    def push(self, val: int) -> None:
        # Write your code here
        pass

    def pop(self) -> None:
        # Write your code here
        pass

    def top(self) -> int:
        # Write your code here
        pass

    def getMin(self) -> int:
        # Write your code here
        pass`,
      java: `class MinStack {
    public MinStack() {
        // Initialize your stack here
    }
    
    public void push(int val) {
        // Write your code here
    }
    
    public void pop() {
        // Write your code here
    }
    
    public int top() {
        // Write your code here
    }
    
    public int getMin() {
        // Write your code here
    }
}`,
      cpp: `class MinStack {
public:
    MinStack() {
        // Initialize your stack here
    }
    
    void push(int val) {
        // Write your code here
    }
    
    void pop() {
        // Write your code here
    }
    
    int top() {
        // Write your code here
    }
    
    int getMin() {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { operations: ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], values: [[], [-2], [0], [-3], [], [], [], []] }, expected: [null, null, null, null, -3, null, 0, -2] }
    ]
  },
  {
    title: "Longest Palindromic Substring",
    slug: "longest-palindromic-substring",
    difficulty: "Medium",
    order: 23,
    videoId: "XYQEc14igLI",
    description: "Given a string s, return the longest palindromic substring in s.",
    examples: [
      { input: 's = "babad"', output: '"bab"', explanation: '"aba" is also a valid answer.' }
    ],
    constraints: ["1 <= s.length <= 1000", "s consists of only digits and English letters."],
    topics: ["String", "Dynamic Programming"],
    starterCode: {
      javascript: `function longestPalindrome(s) {
    // Write your code here
};`,
      python: `class Solution:
    def longestPalindrome(self, s: str) -> str:
        # Write your code here
        pass`,
      java: `class Solution {
    public String longestPalindrome(String s) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    string longestPalindrome(string s) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { s: "babad" }, expected: "bab" },
      { input: { s: "cbbd" }, expected: "bb" }
    ]
  },
  {
    title: "3Sum",
    slug: "3sum",
    difficulty: "Medium",
    order: 24,
    videoId: "jzZgF8n2vRE",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.",
    examples: [
      { input: "nums = [-1,0,1,2,-1,-4]", output: "[[-1,-1,2],[-1,0,1]]" }
    ],
    constraints: ["3 <= nums.length <= 3000", "-10^5 <= nums[i] <= 10^5"],
    topics: ["Array", "Two Pointers", "Sorting"],
    starterCode: {
      javascript: `function threeSum(nums) {
    // Write your code here
};`,
      python: `class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { nums: [-1, 0, 1, 2, -1, -4] }, expected: [[-1, -1, 2], [-1, 0, 1]] }
    ]
  },
  {
    title: "Rotate Image",
    slug: "rotate-image",
    difficulty: "Medium",
    order: 25,
    videoId: "fMSJSS7eO1w",
    description: "You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).",
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[[7,4,1],[8,5,2],[9,6,3]]" }
    ],
    constraints: ["n == matrix.length == matrix[i].length", "1 <= n <= 20", "-1000 <= matrix[i][j] <= 1000"],
    topics: ["Array", "Math", "Matrix"],
    starterCode: {
      javascript: `function rotate(matrix) {
    // Write your code here
};`,
      python: `class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        # Write your code here
        pass`,
      java: `class Solution {
    public void rotate(int[][] matrix) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expected: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] }
    ]
  },
  {
    title: "Group Anagrams",
    slug: "group-anagrams",
    difficulty: "Medium",
    order: 26,
    videoId: "vzdNOK2oB2E",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    examples: [
      { input: 'strs = ["eat","tea","tan","ate","nat","bat"]', output: '[["bat"],["nat","tan"],["ate","eat","tea"]]' }
    ],
    constraints: ["1 <= strs.length <= 10^4", "0 <= strs[i].length <= 100", "strs[i] consists of lowercase English letters."],
    topics: ["Array", "Hash Table", "String", "Sorting"],
    starterCode: {
      javascript: `function groupAnagrams(strs) {
    // Write your code here
};`,
      python: `class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { strs: ["eat", "tea", "tan", "ate", "nat", "bat"] }, expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]] }
    ]
  },
  {
    title: "Spiral Matrix",
    slug: "spiral-matrix",
    difficulty: "Medium",
    order: 27,
    videoId: "BJnMZNwUk1M",
    description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    examples: [
      { input: "matrix = [[1,2,3],[4,5,6],[7,8,9]]", output: "[1,2,3,6,9,8,7,4,5]" }
    ],
    constraints: ["m == matrix.length", "n == matrix[i].length", "1 <= m, n <= 10", "-100 <= matrix[i][j] <= 100"],
    topics: ["Array", "Matrix", "Simulation"],
    starterCode: {
      javascript: `function spiralOrder(matrix) {
    // Write your code here
};`,
      python: `class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] }, expected: [1, 2, 3, 6, 9, 8, 7, 4, 5] }
    ]
  },
  {
    title: "Word Search",
    slug: "word-search",
    difficulty: "Medium",
    order: 28,
    videoId: "pfiQ_PS1g8E",
    description: "Given an m x n grid of characters board and a string word, return true if word exists in the grid.",
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: "true" }
    ],
    constraints: ["m == board.length", "n = board[i].length", "1 <= m, n <= 6", "1 <= word.length <= 15"],
    topics: ["Array", "Backtracking", "Matrix"],
    starterCode: {
      javascript: `function exist(board, word) {
    // Write your code here
};`,
      python: `class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean exist(char[][] board, String word) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { board: [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], word: "ABCCED" }, expected: true }
    ]
  },
  {
    title: "Decode Ways",
    slug: "decode-ways",
    difficulty: "Medium",
    order: 29,
    videoId: "FEkZxCl_-ik",
    description: "A message containing letters from A-Z can be encoded into numbers using 'A' -> '1', 'B' -> '2', ..., 'Z' -> '26'. Given a string s containing only digits, return the number of ways to decode it.",
    examples: [
      { input: 's = "12"', output: "2", explanation: '"12" could be decoded as "AB" (1 2) or "L" (12).' }
    ],
    constraints: ["1 <= s.length <= 100", "s contains only digits and may contain leading zero(s)."],
    topics: ["String", "Dynamic Programming"],
    starterCode: {
      javascript: `function numDecodings(s) {
    // Write your code here
};`,
      python: `class Solution:
    def numDecodings(self, s: str) -> int:
        # Write your code here
        pass`,
      java: `class Solution {
    public int numDecodings(String s) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    int numDecodings(string s) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { s: "12" }, expected: 2 },
      { input: { s: "226" }, expected: 3 }
    ]
  },
  {
    title: "Binary Tree Level Order Traversal",
    slug: "binary-tree-level-order-traversal",
    difficulty: "Medium",
    order: 30,
    videoId: "6ZnyEApgFYg",
    description: "Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).",
    examples: [
      { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]" }
    ],
    constraints: ["The number of nodes in the tree is in the range [0, 2000].", "-1000 <= Node.val <= 1000"],
    topics: ["Tree", "Breadth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function levelOrder(root) {
    // Write your code here
};`,
      python: `class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        # Write your code here
        pass`,
      java: `class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    vector<vector<int>> levelOrder(TreeNode* root) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [3, 9, 20, null, null, 15, 7] }, expected: [[3], [9, 20], [15, 7]] }
    ]
  },
  {
    title: "Validate Binary Search Tree",
    slug: "validate-binary-search-tree",
    difficulty: "Medium",
    order: 31,
    videoId: "s6ATEkipzow",
    description: "Given the root of a binary tree, determine if it is a valid binary search tree (BST).",
    examples: [
      { input: "root = [2,1,3]", output: "true" }
    ],
    constraints: ["The number of nodes in the tree is in the range [1, 10^4].", "-2^31 <= Node.val <= 2^31 - 1"],
    topics: ["Tree", "Depth-First Search", "Binary Search Tree", "Binary Tree"],
    starterCode: {
      javascript: `function isValidBST(root) {
    // Write your code here
};`,
      python: `class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        # Write your code here
        pass`,
      java: `class Solution {
    public boolean isValidBST(TreeNode root) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    bool isValidBST(TreeNode* root) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [2, 1, 3] }, expected: true }
    ]
  },
  {
    title: "Lowest Common Ancestor of a Binary Tree",
    slug: "lowest-common-ancestor-of-a-binary-tree",
    difficulty: "Medium",
    order: 32,
    videoId: "13m9ZCB8gjw",
    description: "Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.",
    examples: [
      { input: "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1", output: "3" }
    ],
    constraints: ["The number of nodes in the tree is in the range [2, 10^5].", "-10^9 <= Node.val <= 10^9", "All Node.val are unique.", "p != q", "p and q will exist in the tree."],
    topics: ["Tree", "Depth-First Search", "Binary Tree"],
    starterCode: {
      javascript: `function lowestCommonAncestor(root, p, q) {
    // Write your code here
};`,
      python: `class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        # Write your code here
        pass`,
      java: `class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // Write your code here
    }
}`,
      cpp: `class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        // Write your code here
    }
};`
    },
    testCases: [
      { input: { root: [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], p: 5, q: 1 }, expected: 3 }
    ]
  }
];
function getDetailedProblem(slugOrId) {
  if (!slugOrId) return void 0;
  const normalized = slugOrId.toLowerCase().trim();
  return sampleProblems.find((p) => p.slug.toLowerCase() === normalized || p.id && p.id.toLowerCase() === normalized);
}
function getAllDetailedProblems() {
  return sampleProblems;
}

// server/routes.ts
import { z } from "zod";
import { createHash } from "crypto";
import OpenAI from "openai";
var openai = process.env.OPENAI_API_KEY ? new OpenAI({ apiKey: process.env.OPENAI_API_KEY }) : null;
var SYSTEM_PROMPT = `You are the Code-Hunger Helpbot, an AI assistant for the Code-Hunger competitive programming platform.
Your goal is to help users navigate the website, understand its features, and assist with coding related questions.

Key Features of Code-Hunger:
1. Virtual Coding Contests: Timed challenges with real-time leaderboards.
2. Problems: A wide range of coding problems (Easy, Medium, Hard) in JavaScript, Python, Java, and C++.
3. Profile: Tracks solved problems, current streak, reward points, and earned badges.
4. Gamification: Earn XP and badges (like "First Solve", "Algorithmist", "Daily Streak") for solving problems.
5. Interview Mode: Specialized contest simulation for mock interviews.
6. Blockchain Security: Contest results are secured with blockchain-style hashing.
7. Submissions: Detailed history of all code submissions and their status.
8. Learning Paths: Structured courses to master specific domains (e.g., DSA, Frontend).
9. Job Simulations: Mock interview experiences for top companies like Google and Meta.
10. College Hub: Specialized communities for colleges (e.g., MIT, Stanford) with exclusive leaderboards.
11. Real-time Collaboration: Live collaborative coding sessions with friends.
12. Cloud Sync: Synchronize your progress and code with GitHub and Replit.

Be helpful, concise, and encourage users to keep practicing and participating in contests.
If a user asks about a specific problem, you can explain the logic but avoid giving the full solution immediately unless they really need it.`;
var PISTON_API = "https://emkc.org/api/v2/piston";
var LANGUAGE_MAP = {
  javascript: { language: "javascript", version: "18.15.0" },
  python: { language: "python", version: "3.10.0" },
  java: { language: "java", version: "15.0.2" },
  cpp: { language: "cpp", version: "10.2.0" }
};
function secureResult(data) {
  return createHash("sha256").update(JSON.stringify(data)).digest("hex");
}
var JS_HELPERS = `
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val);
  this.left = (left === undefined ? null : left);
  this.right = (right === undefined ? null : right);
}
function arrayToLinkedList(arr) {
  if (!arr || arr.length === 0) return null;
  const head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}
function linkedListToArray(head) {
  const result = [];
  let current = head;
  let count = 0;
  while (current !== null && count < 10000) {
    result.push(current.val);
    current = current.next;
    count++;
  }
  return result;
}
function arrayToTree(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (i < arr.length && arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
function treeToArray(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node) {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push(null);
    }
  }
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop();
  }
  return result;
}
`;
var PYTHON_HELPERS = `
import json
import sys
from typing import *

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
`;
var JAVA_HELPERS = `
import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) { this.val = val; }
    ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Helper {
    static ListNode arrayToLinkedList(int[] arr) {
        if (arr == null || arr.length == 0) return null;
        ListNode head = new ListNode(arr[0]);
        ListNode current = head;
        for (int i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }
    
    static String linkedListToString(ListNode head) {
        StringBuilder sb = new StringBuilder("[");
        ListNode current = head;
        int count = 0;
        while (current != null && count < 10000) {
            if (count > 0) sb.append(",");
            sb.append(current.val);
            current = current.next;
            count++;
        }
        sb.append("]");
        return sb.toString();
    }
    
    static String arrayToString(int[] arr) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            if (i > 0) sb.append(",");
            sb.append(arr[i]);
        }
        sb.append("]");
        return sb.toString();
    }
    
    static String arrayToString(String[] arr) {
        StringBuilder sb = new StringBuilder("[");
        for (int i = 0; i < arr.length; i++) {
            if (i > 0) sb.append(",");
            sb.append("\\"").append(arr[i]).append("\\"");
        }
        sb.append("]");
        return sb.toString();
    }
    
    static String boolToString(boolean b) {
        return b ? "true" : "false";
    }
}
`;
var CPP_HELPERS = `
#include <iostream>
#include <vector>
#include <string>
#include <queue>
#include <sstream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

ListNode* arrayToLinkedList(vector<int>& arr) {
    if (arr.empty()) return nullptr;
    ListNode* head = new ListNode(arr[0]);
    ListNode* current = head;
    for (int i = 1; i < arr.size(); i++) {
        current->next = new ListNode(arr[i]);
        current = current->next;
    }
    return head;
}

string linkedListToString(ListNode* head) {
    string result = "[";
    ListNode* current = head;
    int count = 0;
    while (current != nullptr && count < 10000) {
        if (count > 0) result += ",";
        result += to_string(current->val);
        current = current->next;
        count++;
    }
    result += "]";
    return result;
}

template<typename T>
string vectorToString(vector<T>& arr) {
    string result = "[";
    for (int i = 0; i < arr.size(); i++) {
        if (i > 0) result += ",";
        result += to_string(arr[i]);
    }
    result += "]";
    return result;
}

string vectorToString(vector<string>& arr) {
    string result = "[";
    for (int i = 0; i < arr.size(); i++) {
        if (i > 0) result += ",";
        result += "\\"" + arr[i] + "\\"";
    }
    result += "]";
    return result;
}

string boolToString(bool b) {
    return b ? "true" : "false";
}
`;
function detectProblemType(slug) {
  const linkedListProblems = ["reverse-linked-list", "merge-two-sorted-lists", "linked-list-cycle", "remove-nth-node-from-end-of-list"];
  const treeProblems = ["maximum-depth-of-binary-tree", "invert-binary-tree", "same-tree", "symmetric-tree", "binary-tree-level-order-traversal"];
  if (linkedListProblems.includes(slug)) return "linkedlist";
  if (treeProblems.includes(slug)) return "tree";
  return "other";
}
function generateTestWrapper(language, userCode, testCase, problemType, functionName) {
  const inputJson = JSON.stringify(testCase.input);
  if (language === "javascript") {
    let argConversions = "";
    let resultConversion = "result";
    if (problemType === "linkedlist") {
      argConversions = `
        const convertedArgs = Object.entries(input).map(([key, val]) => {
          if (key === 'head' || key === 'l1' || key === 'l2' || key === 'list1' || key === 'list2') {
            return arrayToLinkedList(val);
          }
          return val;
        });
      `;
      resultConversion = "linkedListToArray(result)";
    } else if (problemType === "tree") {
      argConversions = `
        const convertedArgs = Object.entries(input).map(([key, val]) => {
          if (key === 'root' || key === 'p' || key === 'q' || key === 'tree1' || key === 'tree2') {
            return arrayToTree(val);
          }
          return val;
        });
      `;
      resultConversion = "(typeof result === 'number' || typeof result === 'boolean') ? result : treeToArray(result)";
    } else {
      argConversions = "const convertedArgs = Object.values(input);";
    }
    return `
${JS_HELPERS}
${userCode}

const input = ${inputJson};
${argConversions}
const result = ${functionName}(...convertedArgs);
console.log(JSON.stringify(${resultConversion}));
`;
  }
  if (language === "python") {
    let argConversions = "";
    let resultConversion = "result";
    if (problemType === "linkedlist") {
      argConversions = `
args = []
for key, val in input.items():
    if key in ['head', 'l1', 'l2', 'list1', 'list2']:
        args.append(array_to_linked_list(val))
    else:
        args.append(val)
`;
      resultConversion = "linked_list_to_array(result)";
    } else if (problemType === "tree") {
      argConversions = `
args = []
for key, val in input.items():
    if key in ['root', 'p', 'q', 'tree1', 'tree2']:
        args.append(array_to_tree(val))
    else:
        args.append(val)
`;
      resultConversion = "result if isinstance(result, (int, bool, float)) else tree_to_array(result)";
    } else {
      argConversions = "args = list(input.values())";
    }
    return `
${PYTHON_HELPERS}

${userCode}

input = ${inputJson.replace(/null/g, "None").replace(/true/g, "True").replace(/false/g, "False")}
${argConversions}

if 'Solution' in globals():
    result = Solution().${functionName}(*args)
else:
    result = ${functionName}(*args)

output = ${resultConversion}
if isinstance(output, bool):
    print(json.dumps(output))
else:
    print(json.dumps(output))
`;
  }
  if (language === "java") {
    const inputs = testCase.input;
    let mainCode = "";
    if (problemType === "linkedlist" && inputs.head) {
      const arr = JSON.stringify(inputs.head);
      mainCode = `
        int[] arr = new int[]{${inputs.head.join(",")}};
        ListNode head = Helper.arrayToLinkedList(arr);
        Solution sol = new Solution();
        ListNode result = sol.reverseList(head);
        System.out.println(Helper.linkedListToString(result));
      `;
    } else {
      const firstKey = Object.keys(inputs)[0];
      const firstVal = inputs[firstKey];
      if (Array.isArray(firstVal) && typeof firstVal[0] === "number") {
        mainCode = `
        int[] input = new int[]{${firstVal.join(",")}};
        Solution sol = new Solution();
        var result = sol.${functionName}(input);
        if (result instanceof int[]) {
          System.out.println(Helper.arrayToString((int[])result));
        } else if (result instanceof Boolean) {
          System.out.println(Helper.boolToString((Boolean)result));
        } else {
          System.out.println(result);
        }
        `;
      } else if (Array.isArray(firstVal)) {
        mainCode = `
        Solution sol = new Solution();
        var result = sol.${functionName}(new String[]{${firstVal.map((s) => `"${s}"`).join(",")}});
        System.out.println(result);
        `;
      } else {
        mainCode = `
        Solution sol = new Solution();
        var result = sol.${functionName}(${JSON.stringify(firstVal)});
        System.out.println(result);
        `;
      }
    }
    return `
${JAVA_HELPERS}

${userCode}

public class Main {
    public static void main(String[] args) {
        ${mainCode}
    }
}
`;
  }
  if (language === "cpp") {
    const inputs = testCase.input;
    let mainCode = "";
    if (problemType === "linkedlist" && inputs.head) {
      mainCode = `
    vector<int> arr = {${inputs.head.join(",")}};
    ListNode* head = arrayToLinkedList(arr);
    Solution sol;
    ListNode* result = sol.reverseList(head);
    cout << linkedListToString(result) << endl;
      `;
    } else {
      const firstKey = Object.keys(inputs)[0];
      const firstVal = inputs[firstKey];
      if (Array.isArray(firstVal) && typeof firstVal[0] === "number") {
        mainCode = `
    vector<int> input = {${firstVal.join(",")}};
    Solution sol;
    auto result = sol.${functionName}(input);
    cout << vectorToString(result) << endl;
        `;
      } else {
        mainCode = `
    Solution sol;
    auto result = sol.${functionName}(${JSON.stringify(firstVal)});
    cout << result << endl;
        `;
      }
    }
    return `
${CPP_HELPERS}

${userCode}

int main() {
    ${mainCode}
    return 0;
}
`;
  }
  return userCode;
}
function extractFunctionName(code, language) {
  const skipNames = /* @__PURE__ */ new Set(["if", "for", "while", "switch", "catch", "main", "class", "struct", "return", "Solution", "Main"]);
  if (language === "javascript") {
    const match = code.match(/function\s+(\w+)\s*\(/);
    if (match) return match[1];
    const arrowMatch = code.match(/(?:const|let|var)\s+(\w+)\s*=\s*(?:function|\([^)]*\)\s*=>)/);
    if (arrowMatch) return arrowMatch[1];
    return "solution";
  }
  if (language === "python") {
    const classMatch = code.match(/class\s+Solution[\s\S]*?def\s+(\w+)\s*\(\s*self/);
    if (classMatch && classMatch[1] !== "__init__") return classMatch[1];
    const match = code.match(/def\s+(\w+)\s*\(/);
    return match ? match[1] : "solution";
  }
  if (language === "java") {
    const methods = Array.from(code.matchAll(/public\s+[\w<>\[\]]+\s+(\w+)\s*\(/g));
    for (const m of methods) {
      if (!skipNames.has(m[1])) return m[1];
    }
    return "solution";
  }
  if (language === "cpp") {
    const classBody = code.match(/class\s+Solution\s*\{([\s\S]*)\}/);
    if (classBody) {
      const methodMatch = classBody[1].match(/\b[\w<>&*:\s]+?\b(\w+)\s*\([^)]*\)\s*(const\s*)?\{/);
      if (methodMatch && !skipNames.has(methodMatch[1])) return methodMatch[1];
    }
    const allFns = Array.from(code.matchAll(/\b(\w+)\s*\([^)]*\)\s*\{/g));
    for (const m of allFns) {
      if (!skipNames.has(m[1])) return m[1];
    }
    return "solution";
  }
  return "solution";
}
async function registerRoutes(app2) {
  const apiRouter = Router();
  apiRouter.get("/health", (_req, res) => {
    res.json({ status: "ok", ts: Date.now() });
  });
  apiRouter.post("/execute", async (req, res) => {
    try {
      const { language, code, testCases, problemSlug } = req.body;
      if (!LANGUAGE_MAP[language]) {
        return res.status(400).json({ error: "Unsupported language" });
      }
      if (!Array.isArray(testCases) || testCases.length === 0) {
        return res.status(400).json({ error: "No test cases provided" });
      }
      const problemType = detectProblemType(problemSlug || "");
      const functionName = extractFunctionName(code, language);
      const langConfig = LANGUAGE_MAP[language];
      const results = [];
      if (language === "javascript") {
        for (let i = 0; i < testCases.length; i++) {
          const testCase = testCases[i];
          const wrappedCode = generateTestWrapper("javascript", code, testCase, problemType, functionName);
          const logs = [];
          try {
            const sandbox = {
              console: {
                log: (...args) => logs.push(args.map((a) => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ")),
                error: (...args) => logs.push(args.map((a) => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" ")),
                warn: () => {
                },
                info: () => {
                }
              },
              JSON,
              Math,
              Array,
              Object,
              String,
              Number,
              Boolean,
              Date,
              RegExp,
              parseInt,
              parseFloat,
              isNaN,
              isFinite,
              Set,
              Map
            };
            vm.createContext(sandbox);
            vm.runInContext(wrappedCode, sandbox, { timeout: 3e3 });
            const lastLog = logs[logs.length - 1]?.trim() || "";
            let parsedOutput;
            try {
              parsedOutput = JSON.parse(lastLog);
            } catch {
              parsedOutput = lastLog;
            }
            const expected = testCase.expected;
            const passed = JSON.stringify(parsedOutput) === JSON.stringify(expected);
            results.push({
              testCase: i + 1,
              passed,
              input: JSON.stringify(testCase.input),
              expected: JSON.stringify(expected),
              actual: JSON.stringify(parsedOutput)
            });
          } catch (vmErr) {
            results.push({
              testCase: i + 1,
              passed: false,
              input: JSON.stringify(testCase.input),
              expected: JSON.stringify(testCase.expected),
              actual: "Error",
              error: vmErr.message || "Runtime Error"
            });
          }
        }
        return res.json({ results });
      }
      for (let i = 0; i < testCases.length; i++) {
        const testCase = testCases[i];
        const wrappedCode = generateTestWrapper(language, code, testCase, problemType, functionName);
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 9e3);
          const response = await fetch(`${PISTON_API}/execute`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            signal: controller.signal,
            body: JSON.stringify({
              language: langConfig.language,
              version: langConfig.version,
              files: [{ name: language === "java" ? "Main.java" : `main.${language === "cpp" ? "cpp" : language === "python" ? "py" : "js"}`, content: wrappedCode }]
            })
          });
          clearTimeout(timeoutId);
          if (!response.ok) {
            const errText = await response.text().catch(() => "");
            results.push({
              testCase: i + 1,
              passed: false,
              input: JSON.stringify(testCase.input),
              expected: JSON.stringify(testCase.expected),
              actual: "Error",
              error: `Compiler status ${response.status}: ${errText.slice(0, 100) || "Execution service unavailable"}`
            });
            continue;
          }
          const pistonResult = await response.json();
          if (pistonResult.run?.stderr) {
            results.push({
              testCase: i + 1,
              passed: false,
              input: JSON.stringify(testCase.input),
              expected: JSON.stringify(testCase.expected),
              actual: "Error",
              error: pistonResult.run.stderr
            });
          } else {
            const output = pistonResult.run?.stdout?.trim() || "";
            let parsedOutput;
            try {
              parsedOutput = JSON.parse(output);
            } catch {
              parsedOutput = output;
            }
            const expected = testCase.expected;
            const passed = JSON.stringify(parsedOutput) === JSON.stringify(expected);
            results.push({
              testCase: i + 1,
              passed,
              input: JSON.stringify(testCase.input),
              expected: JSON.stringify(expected),
              actual: JSON.stringify(parsedOutput)
            });
          }
        } catch (execError) {
          const isTimeout = execError.name === "AbortError";
          results.push({
            testCase: i + 1,
            passed: false,
            input: JSON.stringify(testCase.input),
            expected: JSON.stringify(testCase.expected),
            actual: "Error",
            error: isTimeout ? "Execution timed out (9s limit)" : execError.message || "Execution failed"
          });
        }
      }
      res.json({ results });
    } catch (error) {
      res.status(500).json({ error: error.message || "Execution failed" });
    }
  });
  apiRouter.get("/problems", async (req, res) => {
    try {
      let problems2 = await storage.getProblems();
      if (!problems2 || problems2.length === 0) {
        problems2 = getAllDetailedProblems();
      }
      res.json(problems2);
    } catch (error) {
      res.json(getAllDetailedProblems());
    }
  });
  apiRouter.get("/problems/:slug/interaction", async (req, res) => {
    try {
      const { slug } = req.params;
      const visitorId = req.query.visitorId || "anonymous";
      const interaction = await storage.getUserProblemInteraction(visitorId, slug);
      let problem = await storage.getProblemBySlug(slug);
      if (!problem) {
        problem = await storage.getProblem(slug);
      }
      res.json({
        liked: interaction?.liked || false,
        disliked: interaction?.disliked || false,
        starred: interaction?.starred || false,
        solved: interaction?.solved || false,
        likes: problem?.likes || 0,
        dislikes: problem?.dislikes || 0
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch interaction data" });
    }
  });
  apiRouter.post("/problems/:slug/like", async (req, res) => {
    try {
      const { slug } = req.params;
      const { visitorId } = req.body;
      const result = await storage.toggleLike(visitorId || "anonymous", slug);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle like" });
    }
  });
  apiRouter.post("/problems/:slug/dislike", async (req, res) => {
    try {
      const { slug } = req.params;
      const { visitorId } = req.body;
      const result = await storage.toggleDislike(visitorId || "anonymous", slug);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle dislike" });
    }
  });
  apiRouter.post("/problems/:slug/star", async (req, res) => {
    try {
      const { slug } = req.params;
      const { visitorId } = req.body;
      const result = await storage.toggleStar(visitorId || "anonymous", slug);
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: "Failed to toggle star" });
    }
  });
  apiRouter.get("/interactions", async (req, res) => {
    try {
      const visitorId = req.query.visitorId || "anonymous";
      const interactions = await storage.getAllInteractions(visitorId);
      res.json(interactions);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch interactions" });
    }
  });
  apiRouter.get("/problems/:identifier", async (req, res) => {
    try {
      const { identifier } = req.params;
      let problem = await storage.getProblemBySlug(identifier);
      if (!problem) {
        problem = await storage.getProblem(identifier);
      }
      if (!problem) {
        problem = getDetailedProblem(identifier);
      }
      if (!problem) {
        return res.status(404).json({ message: "Problem not found" });
      }
      const detailed = getDetailedProblem(problem.slug || identifier);
      if (detailed) {
        problem = {
          ...detailed,
          ...problem,
          starterCode: problem.starterCode || detailed.starterCode,
          testCases: problem.testCases || detailed.testCases,
          examples: problem.examples?.length ? problem.examples : detailed.examples,
          constraints: problem.constraints?.length ? problem.constraints : detailed.constraints,
          description: problem.description || detailed.description
        };
      }
      res.json(problem);
    } catch (error) {
      const fallback = getDetailedProblem(req.params.identifier);
      if (fallback) {
        return res.json(fallback);
      }
      res.status(500).json({ message: "Failed to fetch problem" });
    }
  });
  apiRouter.post("/submissions", async (req, res) => {
    try {
      const submissionData = insertSubmissionSchema.parse(req.body);
      const submission = await storage.createSubmission(submissionData);
      const isAccepted = submissionData.status === "Accepted";
      const problem = await storage.getProblem(submissionData.problemId) || await storage.getProblemBySlug(submissionData.problemId);
      const problemSlug = problem?.slug || submissionData.problemId;
      const existing = await storage.getUserProblem(submissionData.userId, problemSlug);
      if (existing) {
        await storage.updateUserProblem(submissionData.userId, problemSlug, {
          solved: existing.solved || isAccepted,
          attempts: (existing.attempts || 0) + 1,
          lastAttemptAt: /* @__PURE__ */ new Date()
        });
      } else {
        await storage.createUserProblem({
          visitorId: submissionData.userId,
          problemSlug,
          solved: isAccepted,
          attempts: 1,
          lastAttemptAt: /* @__PURE__ */ new Date()
        });
      }
      if (isAccepted) {
        await storage.updateUserStreak(submissionData.userId);
        await storage.addRewardPoints(submissionData.userId, 10);
        const problems2 = await storage.getProblems();
        const userProblems2 = await Promise.all(problems2.map((p) => storage.getUserProblem(submissionData.userId, p.slug)));
        const solvedCount = userProblems2.filter((p) => p?.solved).length;
        const badges2 = await storage.getBadges();
        const userBadges2 = await storage.getUserBadges(submissionData.userId);
        for (const badge of badges2) {
          const alreadyHas = userBadges2.some((ub) => ub.badgeId === badge.id);
          if (!alreadyHas) {
            const criteria = badge.criteria;
            if (criteria.type === "solved_count" && solvedCount >= criteria.count) {
              await storage.awardBadge(submissionData.userId, badge.id);
            }
          }
        }
      }
      res.json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid submission data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to submit solution" });
    }
  });
  apiRouter.get("/contests", async (req, res) => {
    try {
      const contests2 = await storage.getContests();
      res.json(contests2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contests" });
    }
  });
  apiRouter.get("/contests/:id", async (req, res) => {
    try {
      const contest = await storage.getContest(req.params.id);
      if (!contest) return res.status(404).json({ message: "Contest not found" });
      res.json(contest);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contest" });
    }
  });
  apiRouter.post("/contests/:id/join", async (req, res) => {
    try {
      const { userId } = req.body;
      const participant = await storage.joinContest({ contestId: req.params.id, userId });
      res.json(participant);
    } catch (error) {
      res.status(500).json({ message: "Failed to join contest" });
    }
  });
  apiRouter.get("/contests/:id/leaderboard", async (req, res) => {
    try {
      const participants = await storage.getContestParticipants(req.params.id);
      res.json(participants.sort((a, b) => (b.score || 0) - (a.score || 0)));
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch leaderboard" });
    }
  });
  apiRouter.get("/users/:userId/streak", async (req, res) => {
    try {
      const streak = await storage.getUserStreak(req.params.userId);
      res.json(streak || { currentStreak: 0, longestStreak: 0 });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch streak" });
    }
  });
  apiRouter.get("/users/:userId/badges", async (req, res) => {
    try {
      const userBadges2 = await storage.getUserBadges(req.params.userId);
      const badges2 = await storage.getBadges();
      const detailedBadges = userBadges2.map((ub) => ({
        ...ub,
        badge: badges2.find((b) => b.id === ub.badgeId)
      }));
      res.json(detailedBadges);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch badges" });
    }
  });
  apiRouter.get("/users/:userId/rewards", async (req, res) => {
    try {
      const rewards = await storage.getRewardPoints(req.params.userId);
      res.json(rewards || { points: 0 });
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch rewards" });
    }
  });
  apiRouter.get("/badges", async (req, res) => {
    try {
      const badges2 = await storage.getBadges();
      res.json(badges2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch badges" });
    }
  });
  apiRouter.post("/contests/:id/secure", async (req, res) => {
    try {
      const { userId, score } = req.body;
      const hash = secureResult({ contestId: req.params.id, userId, score, timestamp: Date.now() });
      const updated = await storage.updateContestParticipant(req.params.id, userId, { blockchainHash: hash });
      res.json({ hash, updated });
    } catch (error) {
      res.status(500).json({ message: "Failed to secure result" });
    }
  });
  apiRouter.get("/users/:userId/submissions-with-details", async (req, res) => {
    try {
      const { userId } = req.params;
      const submissions2 = await storage.getSubmissionsWithDetails(userId);
      res.json(submissions2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch submissions with details" });
    }
  });
  apiRouter.get("/users/:userId/submissions", async (req, res) => {
    try {
      const { userId } = req.params;
      const { problemId } = req.query;
      const submissions2 = await storage.getSubmissions(userId, problemId);
      res.json(submissions2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch submissions" });
    }
  });
  apiRouter.get("/users/:userId/problems", async (req, res) => {
    try {
      const { userId } = req.params;
      const problems2 = await storage.getProblems();
      const userProblems2 = await Promise.all(
        problems2.map(async (problem) => {
          const userProblem = await storage.getUserProblem(userId, problem.slug);
          return {
            ...problem,
            solved: userProblem?.solved || false,
            attempts: userProblem?.attempts || 0
          };
        })
      );
      res.json(userProblems2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user problems" });
    }
  });
  apiRouter.post("/users", async (req, res) => {
    try {
      const userData = req.body;
      let user = await storage.getUserByEmail(userData.email);
      if (user) {
        res.json(user);
      } else {
        user = await storage.createUser(userData);
        res.json(user);
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to create/update user" });
    }
  });
  apiRouter.post("/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!openai) {
        return res.status(503).json({
          content: "I'm sorry, my AI processing is currently disabled because the API key is missing. Please contact the administrator to set up the OPENAI_API_KEY."
        });
      }
      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ]
      });
      const content = response.choices[0].message.content;
      res.json({ content });
    } catch (error) {
      console.error("Chatbot error:", error);
      res.status(500).json({ content: "Sorry, I encountered an error while processing your request." });
    }
  });
  apiRouter.get("/colleges", async (req, res) => {
    try {
      const colleges2 = await storage.getColleges();
      res.json(colleges2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch colleges" });
    }
  });
  apiRouter.get("/colleges/:slug", async (req, res) => {
    try {
      const college = await storage.getCollegeBySlug(req.params.slug);
      if (!college) return res.status(404).json({ message: "College not found" });
      res.json(college);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch college" });
    }
  });
  apiRouter.get("/learning-paths", async (req, res) => {
    try {
      const paths = await storage.getLearningPaths();
      res.json(paths);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch learning paths" });
    }
  });
  apiRouter.get("/learning-paths/:id", async (req, res) => {
    try {
      const path = await storage.getLearningPath(req.params.id);
      if (!path) return res.status(404).json({ message: "Learning path not found" });
      res.json(path);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch learning path" });
    }
  });
  apiRouter.get("/users/:userId/learning-paths", async (req, res) => {
    try {
      const paths = await storage.getUserLearningPaths(req.params.userId);
      res.json(paths);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch user learning paths" });
    }
  });
  apiRouter.post("/users/:userId/learning-paths/:pathId/progress", async (req, res) => {
    try {
      const { progress, completed } = req.body;
      const updated = await storage.updateUserLearningPath(req.params.userId, req.params.pathId, { progress, completed });
      res.json(updated);
    } catch (error) {
      res.status(500).json({ message: "Failed to update progress" });
    }
  });
  apiRouter.get("/job-simulations", async (req, res) => {
    try {
      const simulations = await storage.getJobSimulations();
      res.json(simulations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch job simulations" });
    }
  });
  apiRouter.get("/job-simulations/:id", async (req, res) => {
    try {
      const simulation = await storage.getJobSimulation(req.params.id);
      if (!simulation) return res.status(404).json({ message: "Simulation not found" });
      res.json(simulation);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch simulation" });
    }
  });
  app2.use("/api", apiRouter);
  app2.use("/", apiRouter);
  const httpServer = createServer(app2);
  return httpServer;
}

// server/api.ts
var app = express();
app.use((req, res, next) => {
  const origin = req.headers.origin || "*";
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,PATCH,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var initPromise = null;
var initError = null;
function init() {
  if (initPromise) return initPromise;
  initPromise = (async () => {
    await registerRoutes(app);
    app.use((err, _req, res, _next) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";
      console.error("[API Error]", err);
      res.status(status).json({ message });
    });
  })().catch((error) => {
    initError = error instanceof Error ? error : new Error(String(error));
    console.error("[API Init Error]", initError);
  });
  return initPromise;
}
async function handler(req, res) {
  if (req.headers && req.headers["x-matched-path"]) {
    const matchedPath = req.headers["x-matched-path"];
    if (matchedPath && matchedPath !== "/api/index.ts") {
      req.url = matchedPath;
    }
  }
  if (req.url && (req.url.startsWith("/api/index.ts") || req.url.startsWith("/api/index"))) {
    const originalUrl = req.url.replace(/^\/api\/index(\.ts)?/, "");
    req.url = originalUrl ? originalUrl.startsWith("/") ? originalUrl : `/${originalUrl}` : "/";
  }
  await init();
  if (initError) {
    return res.status(500).json({
      message: "API initialization failed",
      error: initError.message
    });
  }
  app(req, res);
}
export {
  handler as default
};

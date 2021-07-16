var maximumAverageSubtree = function(root) {
  function dfs(node) {
      // check bottom case
      if (node === null) {
          return {
              sum: 0,
              maxAvg: 0,
              count: 0
          }
      }

      const {
          sum: lSum,
          maxAvg: lMaxAvg,
          count: lCount
      } = dfs(node.left)
      const {
          sum: rSum,
          maxAvg: rMaxAvg,
          count: rCount
      } = dfs(node.right)

      const sum = lSum + rSum + node.val
      const count = lCount + rCount + 1


      return {
          sum: sum,
          count: count,
          maxAvg: Math.max(sum/count, lMaxAvg, rMaxAvg)
      }
  }

  return dfs(root).maxAvg
};

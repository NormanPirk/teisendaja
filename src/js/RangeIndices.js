export default function getRangeIndices(range) {
  let start = 0;
  let end = 0;
  let startIsSet = false;
  const nodes = document.getElementById("selectable").childNodes;
  const startNode = getStartNode(range);
  const endNode = getEndNode(range);
  if (startNode && endNode) {
    for (let node of nodes) {
      if (node.isSameNode(startNode) && node.isSameNode(endNode)) {
        if (node.nodeName === "#text") {
          start += range.startOffset;
          end += range.endOffset;
        } else {
          end++;
        }
        break;
      }
      if (node.isSameNode(startNode)) {
        if (node.nodeName === "#text") {
          start += range.startOffset;
        }
        startIsSet = true;
      }
      if (node.isSameNode(endNode)) {
        end += increaseIndex(node, true, range);
        break;
      } else {
        if (!startIsSet) {
          start += increaseIndex(node, false, range);
        }
        end += increaseIndex(node, false, range);
      }
    }
  }
  return { start, end };
}

function getStartNode(range) {
  if (range.startContainer.parentNode.nodeName === "SPAN") {
    return range.startContainer.parentNode;
  } else if (range.startContainer.parentNode.nodeName === "DIV") {
    return range.startContainer;
  }
  return null;
}

function getEndNode(range) {
  if (range.endContainer.parentNode.nodeName === "SPAN") {
    return range.endContainer.parentNode;
  } else if (range.endContainer.parentNode.nodeName === "DIV") {
    return range.endContainer;
  }
  return null;
}

function increaseIndex(node, isEndNode, range) {
  if (node.nodeName === "SPAN") {
    return 1;
  } else if (node.nodeName === "#text") {
    if (isEndNode) {
      return range.endOffset;
    }
    return node.textContent.length;
  }
  return null;
}

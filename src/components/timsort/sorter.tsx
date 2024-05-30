import { Panel } from "reactflow";
import { useReactFlow } from "reactflow";

const Sorter = () => {
  const rf = useReactFlow();
  const { setNodes } = rf;

  function sort() {
    console.log("sorting", rf.getNodes().length, "nodes");

    const node_b = rf.getNode("b");

    if (node_b) {
      console.log("node b found", node_b);

      setNodes((nodes) =>
        nodes.map((node) =>
          node.id === "b"
            ? {
                ...node,
                position: { x: 100, y: 500 },
              }
            : node
        )
      );
    }
  }

  return (
    <Panel position="top-center" className="pt-4">
      <input type="button" onClick={sort} value="Start sort" />
    </Panel>
  );
};

export default Sorter;

import { Panel, useStore } from "reactflow";
export default function ViewportLogger() {
  const { [0]: x, [1]: y, [2]: zoom } = useStore((s) => s.transform);

  // inverse the x and y values. So positive becones negative and vice versa
  const { new_x, new_y } = { new_x: -x, new_y: -y };

  // divive new_x and new_y by the zoom level
  const { final_x, final_y } = { final_x: new_x / zoom, final_y: new_y / zoom };

  const viewport = `x: ${final_x.toFixed(2)}, y: ${final_y.toFixed(2)}, zoom: ${zoom.toFixed(2)}`;

  return (
    <Panel position="top-right" className="pt-4">
      {viewport}
    </Panel>
  );
}

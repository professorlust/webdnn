import numpy as np

from test.runtime.frontend_test.onnx_test.util import make_node, make_tensor_value_info, make_model
from test.util import wrap_template, generate_kernel_test_case
from webdnn.frontend.onnx import ONNXConverter


@wrap_template
def template(x_shape, description: str = ""):
    vx = np.random.rand(*x_shape) - 0.5
    vy = abs(vx)

    x = make_tensor_value_info("x", vx.shape)
    y = make_tensor_value_info("y", vy.shape)
    operator = make_node("Abs", ["x"], ["y"])

    model = make_model([operator], [x], [y])

    graph = ONNXConverter().convert(model)

    generate_kernel_test_case(
        description=f"[ONNX] Abs {description}",
        graph=graph,
        inputs={graph.inputs[0]: vx},
        expected={graph.outputs[0]: vy},
    )


def test():
    template(x_shape=[2, 3, 4, 5])

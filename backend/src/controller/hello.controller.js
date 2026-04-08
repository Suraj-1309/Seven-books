import { asyncHandler } from "../utils/asyncHandler.js";

const hello =  asyncHandler( async (req, res) => {
    await res.send('Hello world');
})

export { hello };
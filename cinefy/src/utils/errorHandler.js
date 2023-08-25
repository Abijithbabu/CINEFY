import notify from "./notification"

const errorHandler = (controller) => async (data) => {
    try {
        const res = await controller(data)
        if (res?.data) {
            const message = res?.data?.message
            message && notify({ message : message })
            return res.data
        }
    } catch (error) {
        const errorMessage = error?.response?.data?.message || error.message
        console.error('Error ' + errorMessage)
        notify({ message: errorMessage, title: 'Error !', type: 'danger' })
        return

    }
}
export default errorHandler
const useGetEnviroment = () => {
    const url=import.meta.env.VITE_BACK_END_URL
    return {url}
}

export default useGetEnviroment
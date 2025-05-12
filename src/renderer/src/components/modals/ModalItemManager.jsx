function ModalItemManager(props) {
    return (
        <>
            {props.isItemManagerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded shadow-md">
                        <div className="flex justify-between items-center border-b pb-2 mb-4">
                            <h2 className="text-xl font-semibold text-gray-800">Create new runner</h2>
                            <button
                                onClick={() => props.setIsItemManagerOpen(false)}
                                className="text-gray-500 hover:text-red-500 text-xl font-bold focus:outline-none"
                                aria-label="Fechar"
                                title="Fechar"
                            >
                                &times;
                            </button>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Runtime Environment</td>
                                    <td>
                                        <select>
                                            <option value="nodejs">NodeJS</option>
                                            <option value="dotnet">.net</option>
                                        </select>
                                        {/* <img src="" alt="" /> */}
                                        <button>edit</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Version</td>
                                    <td>
                                        <input type="text" id="version" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0.1" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Path</td>
                                    <td>
                                        <input type="text" id="path" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="C://path//path" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Command</td>
                                    <td>
                                        <input type="text" id="command" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="npm run dev" />
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="flex justify-end space-x-3 mt-4">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
                            <button className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Discard</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ModalItemManager;
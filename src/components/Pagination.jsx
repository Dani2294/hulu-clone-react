function Pagination({ totalPages, page, handlePagination }) {
	return (
		<div className='flex justify-center p-2 my-10'>
			<button
				className='py-2 px-5 border-2 border-blue-50 cursor-pointer rounded-sm'
				onClick={() => handlePagination('prev', totalPages)}>
				Prev
			</button>
			<div className='py-2 px-5 cursor-pointer rounded-sm mx-4 text-2xl'>
				{page}
			</div>

			<button
				className='py-2 px-5 border-2 border-blue-50 cursor-pointer rounded-sm'
				onClick={() => {
					handlePagination('next', totalPages);
				}}>
				Next
			</button>
		</div>
	);
}

export default Pagination;

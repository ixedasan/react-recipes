import { Heart, HeartPulse } from "lucide-react"

export function RecipeCard() {
	return (
		<>
			<div className='relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl'>
				<div className='relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40'>
					<a href=''>
						<img
							className='w-full h-[13rem] object-cover'
							src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505'
							alt=''
						/>
						<div className='absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60'></div>
						<div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
							<Heart
								size={24}
								className='text-gray-700 hover:fill-red-500 hover:text-red-500'
							/>
						</div>
					</a>
				</div>
				<div className='p-6'>
					<div className='flex items-center justify-between mb-3'>
						<p className='text-lg font-bold'>UI/UX Review Check</p>
					</div>
					<p className='my-2'>Turkish Kitchen</p>
					<div className='flex gap-2 mt-auto'>
						<div className='flex gap-1 bg-amber-200 items-center p-1 rounded-md'>
							<HeartPulse size={16} className='text-amber-500' />
							<span className='text-sm tracking-tighter'>Healty Food</span>
						</div>
						<div className='flex gap-1 bg-amber-200 items-center p-1 rounded-md'>
							<HeartPulse size={16} className='text-amber-500' />
							<span className='text-sm tracking-tighter'>Healty Food</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

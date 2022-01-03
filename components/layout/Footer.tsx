export default function Footer() {
  return (
    <div className='bg-gray-800 text-gray-300 px-6 lg:px-8 py-10'>
      <div className='flex mx-auto justify-center space-x-2 text-base text-white font-medium'>
        <nav>
          <a
            className='duration-200 ease-in-out hover:bg-gray-700 p-2 rounded-lg'
            href='https://github.com/tabarra/txAdmin/blob/master/README.md'
            target='_blank'
            rel='noopener'
          >
            Documentation
          </a>
          <a
            className='duration-200 ease-in-out hover:bg-gray-700 p-2 rounded-lg'
            href='https://discord.gg/yWxjt9zPWR'
            target='_blank'
            rel='noopener'
          >
            Discord
          </a>
          <a
            className='duration-200 ease-in-out hover:bg-gray-700 p-2 rounded-lg'
            href='https://github.com/tabarra/txAdmin'
            target='_blank'
            rel='noopener'
          >
            GitHub
          </a>
        </nav>
      </div>
      <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 mt-8 border-t-2 border-gray-700 pt-3'>
        <div className='text-sm space-y-4 mt-2 md:space-y-1 text-center md:text-left'>
          <p>
            Copyright &copy; 2019-2021 <strong>André Tabarra</strong>.
          </p>
          <p>txAdmin is licensed under the MIT license.</p>
        </div>
        <div className='text-sm space-y-4 mt-2 md:space-y-1 text-center md:text-left'>
          <p>Page by <a target='_blank' rel='noopener' href='https://noodles.cool'>Noodles.</a></p>
        </div>
      </div>
    </div>
  );
}

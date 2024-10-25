import Container from '@/components/Container';

const images = [
  {
    url: 'https://res.cloudinary.com/fay/image/upload/w_800,h_600,c_fill,dpr_2.0,g_auto/v1695151349/tutorials/my-zip-download/vans_sxzz53.jpg',
    name: 'Vans'
  },
  {
    url: 'https://res.cloudinary.com/fay/image/upload/w_800,h_600,c_fill,dpr_2.0,g_auto/v1695151348/tutorials/my-zip-download/nike_nyvgjo.jpg',
    name: 'Nike'
  },
  {
    url: 'https://res.cloudinary.com/fay/image/upload/w_800,h_600,c_fill,dpr_2.0,g_auto/v1695151348/tutorials/my-zip-download/converse_mzczdd.jpg',
    name: 'Converse'
  }
]

function Home() {
  return (
    <Container className="h-full flex items-center justify-center flex-col">
      <ul className="grid gap-12 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => {
          return (
            <li key={image.name} className="rounded overflow-hidden bg-white dark:bg-slate-700">
              <div className="relative">
                <img
                  width={800}
                  height={450}
                  src={image.url}
                  alt={image.name}
                />
              </div>
              <div className="py-4 px-5">
                <p className="mb-1 text-md font-bold leading-tight text-neutral-800 dark:text-neutral-50">
                  { image.name }
                </p>
              </div>
            </li>
          )
        })}
      </ul>
      <p className="mt-20">
        <a href={`/api/archive?images=${encodeURIComponent(JSON.stringify(images))}`} target="_blank" className="inline-block rounded py-2.5 px-6 text-sm text-white font-bold uppercasetext-white bg-slate-600 hover:bg-slate-500 dark:bg-slate-500 dark:hover:bg-slate-400">
          Download
        </a>
      </p>
    </Container>
  )
}

export default Home;

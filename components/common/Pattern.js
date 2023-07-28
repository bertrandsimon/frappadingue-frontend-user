import { ChevronRightIcon } from '@heroicons/react/20/solid'


function Pattern() {
  
  return (
    <div className="relative isolate overflow-hidden bg-black">

    <div
      className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      aria-hidden="true"
    >
      <div
        className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#f4f3f3] to-[#c1bfbf] opacity-20"
        style={{
          clipPath:
            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
        }}
      />
    </div>
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
   
   <span>PATTERN EXAMPLE Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius voluptas vero itaque asperiores atque harum fuga quam saepe voluptates quo? Cupiditate pariatur sit qui explicabo deserunt. Alias, eos officiis. Nam?</span>
    </div>
  </div>

   
  );
}

export default Pattern;

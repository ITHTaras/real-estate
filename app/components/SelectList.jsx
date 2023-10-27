// "use client";

// import arrow from "../../public/images/arrow.svg";

// // HeadlessUI
// import { Fragment } from "react";
// import { Listbox, Transition } from "@headlessui/react";
// import Image from "next/image";

// function SelectList({ value, onChange, data }) {
//   return (
//     <Listbox value={value} onChange={onChange}>
//       <div className="relative mt-4 w-40">
//         <Listbox.Button className="relative w-full cursor-default pr-10 text-left focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//           <span className="block truncate">{value.name}</span>
//           <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//             <Image src={arrow} width={16} height={7} alt="" />
//           </span>
//         </Listbox.Button>
//         <Transition
//           as={Fragment}
//           leave="transition ease-in duration-100"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//             {data.map((person, personIdx) => (
//               <Listbox.Option
//                 key={personIdx}
//                 className={({ active }) =>
//                   `relative cursor-default select-none py-2 pl-10 pr-4 ${
//                     active ? "text-[#1B00EA]" : "text-gray-900"
//                   }`
//                 }
//                 value={person}
//               >
//                 {({ onChange }) => (
//                   <>
//                     <span
//                       className={`block truncate ${
//                         onChange ? "font-medium" : "font-normal"
//                       }`}
//                     >
//                       {person.name}
//                     </span>
//                     {onChange ? (
//                       <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"></span>
//                     ) : null}
//                   </>
//                 )}
//               </Listbox.Option>
//             ))}
//           </Listbox.Options>
//         </Transition>
//       </div>
//     </Listbox>
//   );
// }

// export default SelectList;

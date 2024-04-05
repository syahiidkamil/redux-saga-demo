const styles = {
  container: `px-8 rounded-2xl flex justify-center items-center w-[340px] h-[155px] bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg`,
  cardContainer: "py-2",
  input: {
    label: "text-black/50 dark:text-white/90",
    input: [
      "bg-transparent",
      "text-black/90 dark:text-white/90",
      "placeholder:text-default-700/50 dark:placeholder:text-white/60",
    ],
    innerWrapper: "bg-transparent",
    inputWrapper: [
      "shadow-xl",
      "bg-white/80",
      "dark:bg-default/60",
      "backdrop-blur-xl",
      "backdrop-saturate-200",
      "hover:bg-default-200/70",
      "dark:hover:bg-default/70",
      "group-data-[focused=true]:bg-default-200/50",
      "dark:group-data-[focused=true]:bg-default/60",
      "!cursor-text",
    ],
    clearButton: "text-gray-700 hover:text-gray-900",
  },
  searchIcon:
    "text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0",
};

export default styles;

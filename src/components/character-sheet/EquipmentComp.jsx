const linedPaper = `
  leading-7 bg-transparent resize-none focus:outline-none
  bg-[repeating-linear-gradient(transparent,transparent_calc(1.75rem_-_1px),var(--color-main-200)_calc(1.75rem_-_1px),var(--color-main-200)_1.75rem)]
`;

const COINS = ["cp", "sp", "ep", "gp", "pp"];

function EquipmentComp({ coins, onCoinChange, list, onListChange }) {
  return (
    <section className="h-fit bg-light-100 flex w-full max-w-2xl flex-col overflow-hidden rounded-[10px] border-2 border-main-300">
      <div className="flex">
        <div className="flex flex-col gap-3 p-4">
          {COINS.map((coin) => (
            <label
              key={coin}
              htmlFor={`coin-${coin}`}
              className="flex flex-col-reverse overflow-hidden rounded-[10px] border-2 border-main-300 text-center"
            >
              <span className="bg-main-100/60 text-xs uppercase tracking-widest">
                {coin}
              </span>
              <input
                id={`coin-${coin}`}
                name={coin}
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={coins[coin]}
                onChange={(e) =>
                  onCoinChange(coin, e.target.value.replace(/\D/g, ""))
                }
                className="w-20 bg-transparent py-1 text-center text-xl focus:outline-none"
              />
            </label>
          ))}
        </div>

        <textarea
          aria-label="Equipment"
          rows={12}
          value={list}
          onChange={(e) => onListChange(e.target.value)}
          className={`${linedPaper} flex-1 px-4`}
        />
      </div>

      <span className="bg-main-100/60 py-1 text-center text-xs uppercase tracking-widest">
        Equipment
      </span>
    </section>
  );
}

export default EquipmentComp;

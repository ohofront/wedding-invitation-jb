import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const days = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarContent = () => {
  const firstDay = new Date(2026, 7, 1).getDay(); // 2026년 8월 1일
  const lastDate = new Date(2026, 8, 0).getDate(); // 2026년 8월 마지막 날짜

  const dates = Array(firstDay)
    .fill(null)
    .concat([...Array(lastDate)].map((_, i) => i + 1));

  return (
    <div className='w-full h-full leading-9'>
      <div className='text-2xl font-medium tracking-wide'>2026.08.08</div>
      <div className='mb-5 tracking-wider'>토요일 오후 2시</div>

      <div className='w-full px-4 pb-10 overflow-hidden text-center'>
        <Table className='w-full border-0 table-fixed'>
          <TableHeader>
            <TableRow className='border-0 hover:bg-transparent'>
              {days.map((day, index) => (
                <TableHead
                  key={index}
                  className={
                    day === '일'
                      ? 'h-12 text-center text-[#c6472b]'
                      : day === '토'
                        ? 'h-12 text-center text-blue-500'
                        : 'h-12 text-center'
                  }
                >
                  {day}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody>
            {Array.from({ length: Math.ceil(dates.length / 7) }, (_, week) => (
              <TableRow key={week} className='border-0 hover:bg-transparent'>
                {dates.slice(week * 7, (week + 1) * 7).map((date, i) => {
                  const isSunday = i === 0;
                  const isSaturday = i === 6;
                  const isWeddingDay = date === 8;

                  return (
                    <TableCell
                      key={i}
                      className={
                        isSunday
                          ? 'h-16 text-center text-[#c6472b]'
                          : isSaturday
                            ? 'h-16 text-center text-blue-500'
                            : 'h-16 text-center'
                      }
                    >
                      {date ? (
                        <span className='relative inline-flex items-center justify-center w-10 h-10'>
                          {isWeddingDay && (
                            <span className='absolute inset-0 flex items-center justify-center text-5xl leading-none text-[#858585]'>
                              ♥
                            </span>
                          )}

                          <span className={isWeddingDay ? 'relative z-10 text-sm text-white' : 'relative z-10'}>
                            {date}
                          </span>
                        </span>
                      ) : (
                        ''
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CalendarContent;

using System;
using System.Collections.Generic;
using System.Text;

namespace FlashCard.BusinessLogic.ViewModels
{
    public class DateVM
    {
        public int Year { get; set; }
        public int Month { get; set; }
        public int Day { get; set; }

        public int Hour { get; set; }

        public int Mins { get; set; }
        public int Seconds { get; set; }

        public static implicit operator DateTime(DateVM vm)
        {
            if (vm == null)
                throw new InvalidCastException("Cannot cast null object to DateVM");

            return vm.ToUTCDate();
        }

        public static implicit operator DateVM(DateTime dt)
        {
            return dt.ToDateVM();
        }

        public static implicit operator DateVM(DateTime? dt)
        {
            return dt.HasValue ? dt.Value.ToDateVM() : null;
        }
    }

    public static partial class VMTransforms
    {

        public static DateTime ToUTCDate(this DateVM vm)
        {
            var date = new DateTime(vm.Year, vm.Month, vm.Day, vm.Hour, vm.Mins, vm.Seconds);
            return DateTime.SpecifyKind(date, DateTimeKind.Utc);
        }

        public static DateTime ToDate(this DateVM vm)
        {
            var date = new DateTime(vm.Year, vm.Month, vm.Day, vm.Hour, vm.Mins, vm.Seconds);
            return date;
        }

        public static DateVM ToDateVM(this DateTime date)
        {
            var vm = new DateVM
            {
                Year = date.Year,
                Month = date.Month,
                Day = date.Day,
                Hour = date.Hour,
                Seconds = date.Second,
                Mins = date.Minute
            };

            return vm;
        }

        public static DateVM ToDateVM(this DateTime? date)
        {
            if (date == null)
                return null;

            var vm = new DateVM
            {
                Year = date.Value.Year,
                Month = date.Value.Month,
                Day = date.Value.Day,
                Hour = date.Value.Hour,
                Seconds = date.Value.Second,
                Mins = date.Value.Minute
            };

            return vm;
        }

    }


}

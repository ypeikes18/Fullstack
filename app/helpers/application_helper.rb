module ApplicationHelper

    def parse_time_stamp(timestamp)
        now =  Time.now.to_s.split(' ')
        year, month, day = now[0].split('-')
        hr, min = now[1].split(':')

        timestamp = timestamp.to_s.split(' ')
        t_year, t_month, t_day = timestamp[0].split('-')
        t_hr, t_min = now[1].split(':')

        if year == t_year
            if t_day == day && t_month == month
                if hr == t_hr
                    return "#{min.to_i - t_min.to_i} min ago"
                else 
                    return "#{hr.to_i - t_hr.to_i} hr ago"
                end
            else  
                return "#{months_shorthand(t_month)} #{t_day}"
            end
        else
            return "#{months_shorthand(t_month)} #{t_day}, #{t_year}"
        end
       
    end

    def months_shorthand(num)
        hash = { "01"=>"Jan",
                 "02"=>"Feb",
                 "03"=>"Mar",
                 "04"=>"Apr",
                 "05"=>"May",
                 "06"=>"Jun",
                 "07"=>"Jul",
                 "08"=>"Aug",
                 "09"=>"Sep",
                 "10"=>"Oct",
                 "11"=>"Nov",
                 "12"=>"Dec" }
        hash[num.downcase]
    end





end

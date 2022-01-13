module ApplicationHelper

    def parse_time_stamp(timestamp)
        timestamp.to_formatted_s(:long)
    end


end

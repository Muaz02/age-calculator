export default function isValidDate(d, m, y) {
    const currentdate = new Date()
    const MAX_VALID_YR = currentdate.getFullYear(); 
    const MIN_VALID_YR = 100;
    const maxValidMonth =  currentdate.getMonth() + 1
    const maxValidDay = currentdate.getDate()
    y = parseInt(y)

    function isLeap(year) 
    { 
        return (((year % 4 == 0) &&  
                 (year % 100 != 0)) || 
                 (year % 400 == 0)); 
    } 

        if (y > MAX_VALID_YR ||  
            y < MIN_VALID_YR) 
            return false; 
              
        if ( m < 1 || m > 12 || ((y == MAX_VALID_YR) && (m > maxValidMonth)) )
            return false; 
        if (d < 1 || d > 31 || ((y == MAX_VALID_YR) && (d > maxValidDay)) ) 
            return false; 

        if (m == 2) 
        { 
            if (isLeap(y)) 
                return (d <= 29); 
            else
                return (d <= 28); 
        } 
    
        if (m == 4 || m == 6 || 
            m == 9 || m == 11) 
            return (d <= 30); 
      
        return true; 
    }     
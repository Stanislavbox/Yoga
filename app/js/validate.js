function validate_form ( )
{
    valid = true;

        if ( document.yoga_form.name.value == "" )
        {
                alert ( "Пожалуйста, введите 'Ваше имя'." );
                valid = false;
        }

         if ( document.yoga_form.phone.value == "" )
        {
                alert ( "Пожалуйста, введите 'Ваше номер телефона'." );
                valid = false;
        }


        if ( document.yoga_form.yoga_class.selectedIndex == 0 )
        {
                alert ( "Пожалуйста, выберите Ваш класс." );
                valid = false;
        }



        return valid;
}

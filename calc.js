function display(num)
{
   final.value += num 
}
function clearAll()
{
    final.value=''
}
function back()
{
    final.value=final.value.slice(0,-1)
}
function equal()
{
    try
    {
        final.value = eval(final.value)
    }
    catch
    {
        final.value = 'error'
        setTimeout(()=>{final.value=''},1500)
    }
}
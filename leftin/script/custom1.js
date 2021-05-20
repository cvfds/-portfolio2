/* Navigation */


/* Tab Menu */
$('.btn a:first-child').click(function(){
    $('.tab1').show()
    $('.tab2').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})
$('.btn a:last-child').click(function(){
    $('.tab2').show()
    $('.tab1').hide()
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
})

/* Modal */
$('.open-modal').click(function(){
    $('.modal-content').fadeIn()
})
$('.close-modal').click(function(){
    $('.modal-content').fadeOut()
})


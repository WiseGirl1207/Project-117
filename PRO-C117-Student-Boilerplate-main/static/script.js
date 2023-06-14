$(document).ready(function(){

    console.log('Ready')

    var date = new Date()

    let display_date = "Date:" + date.toLocaleDateString()

    $(document).ready(function(){
        $("#display_date").html(display_date)
    })

    $('').click(function(){

        let text_value = $('').val()

        let input_text = {'' : text_value}
        console.log(input_text)

        $.ajax({
            type : 'POST',
            data : JSON.stringify(input_data),
            dataType : "json",
            contentType : 'application/json',
            success : function(result)
            
            {

                predicted_emotion=Result.data.predicted_emotion
                emoji_url=Result.data.predicted_emotion_img_url
                $("#prediction").html(predicted_emotion) 
                $('#prediction').css("display", "block");
                $("#emo_img_url").attr('src', emo_url); 
                $('#emo_img_url').css("display", "block");

            },

            error : function(result){
                console.log(result)
            }
        })

        $('#text').val("")
    })
        
})
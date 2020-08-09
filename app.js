function result()
{
    marks=0;
    var q1_op1=document.getElementById('q1-op1');
    var q1_op2=document.getElementById('q1-op2');
    var q1_op3=document.getElementById('q1-op3');
    var q1_op4=document.getElementById('q1-op4');

    if(q1_op3.checked==true)
    {
        marks++;

    }
    else
    {
        console.log("Wrong answer")
    }

    var q2_op1=document.getElementById('q2-op1');
    var q2_op2=document.getElementById('q2-op2');
    var q2_op3=document.getElementById('q2-op3');
    var q2_op4=document.getElementById('q2-op4');

    if(q2_op4.checked==true)
    {
        marks++;

    }
    else
    {
        console.log("Wrong answer")
    }

    var q3_op1=document.getElementById('q3-op1');
    var q3_op2=document.getElementById('q3-op2');
    var q3_op3=document.getElementById('q3-op3');
    var q3_op4=document.getElementById('q3-op4');

    if(q3_op1.checked==true)
    {
        marks++;

    }
    else
    {
        console.log("Wrong answer")
    }

    alert("Your Marks is="+marks);
}
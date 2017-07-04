for i in {0..10};   do touch "test_$i.html"; done

j=0; for i in *.jpg; do let j+=1; mv $i $j.jpg ; done


for i in {0..10};   do touch "test_$i.html"; done

j=0; for i in *.jpg; do let j+=1; mv $i $j.jpg ; done


export i=1; for f in *; do mv "$f" ${i}.jpg; export i=`expr $i + 1`; done



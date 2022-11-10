package com.winprovit.challenge.service;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AlticciService {

    public Integer getAlticciSequence(Integer index){
        System.out.println("Print for verify if cache is working");
        return getArraySequenceAwnser(index);
    }

    private Integer getArraySequenceAwnser(Integer index) {
        var arraySequence = new ArrayList<Integer>();

        for (int i=0; i <= index; i++) {
            arraySequence.add(getCalculateIndex(arraySequence, i));
        }

        return getCalculateIndex(arraySequence, index);
    }

    private static Integer getCalculateIndex(List<Integer> arraySequence, Integer index) {
        if (index.equals(0))
            return 0;

        if (index.equals(1) || index.equals(2))
            return 1;

        return arraySequence.get(index - 3) + arraySequence.get(index - 2);
    }
}

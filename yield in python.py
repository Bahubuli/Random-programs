# -*- coding: utf-8 -*-
"""
Created on Thu May 30 18:13:00 2019

@author: jitendra
"""

def gen():
    for n in range(1,10):
        yield n
        #if one more yield is used here than that yield will be called before forst one
        #use below to understand better
        #yield n
        #yield n+100
    
        
    
a=gen()
print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(next(a))
print(next(a))

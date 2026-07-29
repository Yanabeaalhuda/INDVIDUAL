const ORIGINAL_LOGO='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wAARCAFAAUADASIAAhEBAxEB/8QAHQAAAQQDAQEAAAAAAAAAAAAAAQACBgcDBQgECf/EAE8QAAECBAQEAgcEBwMJBgcAAAECAwAEBREGEiExB0FRYRNxCBQiMoGRoUJSYoIVIyRykrHBM6LRFiU0Q1Nzg6PhRFRjlMLwhIWys9Li4//EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMFBAb/xAAzEQACAQIEAwUHBAMBAAAAAAAAAQIDEQQSITEFQVFhcYHR8BMiMpGhscEUI0LhQ1LxNP/aAAwDAQACEQMRAD8A4hAhQoIEUnqAQQIVoMIdhEQrQdoI8oROwraQd4QF4NrQDSBaDCEOtANIbBA0hAQRANIVrQbXh1r2ggawErDQmDlvGQJvD0IJMK5JRGJSbxkDRMelDGblHtYkieUQc0i2NNs1olyYcJZQ5GJExSFrt7Jj3Iw86oe4flFTrxRdHDtkPEuRfSMamCOsTJ3D7qf9WflGufpS039kwRrphLDtEZ8I3hpSRvG3ek1JJuI8rjBHKLVK5TKDR4SnWAAYzqRYmGFPOJ3K7GIiAReHkQLQyNhmUiBDwOUIjSAVjGRpDLRkIhu0BFoEDLDrQjpARsNteARrDiIBEAmhsC0G0K0MjYbltCh1oaRDItCEOgCCIBpBhWgWh4EK5OwINoQGsGESsKHaQLWhCAaQQIdAAg2gJBAhWggdYcE35QDsBI1vGRLZUY91Ko85WJtEpISj83NL91lhBWo97D+e0XThL0c6vUMj1dnmaYwdSwyA8+fM3yJ+Z8o5q+KpUFepKxNIpFqVURtbuYlWHMBV3Ey0ppFJnZ6/2pdlSkj82w+cdVU7htw54dSbc/VGZBsJ1E7W30rJP4Uqsn+FN48Vc9KnA9BR6vSWp+tKb0SJVrwGBbopdtPJMZj4lUraYam5duyCVWENOZXdA9GHGU+EqmmJGnpP/epkFX8LYVFnUL0S2U5f0liNsK+7LSpP1Uofyisqt6YeLJolNGoNIpzZ91cwVzTg+ZSn6RDJ/BITidVlEvYum5ZJ+xItty4H8CQfrEXRx9TWbUSP6irL4FY7GpHov4Ulkp8aaqkwR0CED6JMS2T9H3BLAAVJzav33v/ANRHzsmMeYoqCs09iWsvk/7WedN/70YP8oJ5eipyYUeqnVH+sL9DU/lK48uKn/kaPo3O8AsEzCSkSM0nu29/0iI1f0YcIvJV4T1TYUefsKA+aRHByq9OpBCJ2YQRzS8of1jIxjjE9OIMliSsyxGxan3Rb4ZoP0FT+E7eArYmH+Rs6qrfomSawo0/EICuSZmV0+aVf0is8Qei5i+RClSiZGoJH/d5gJUfyrCf5xAKf6QnE+klPhYunZlKfsTyG5gH+NJP1ia0f0xsXShCK1QqTUmxupjPLOH5FSf7sP2GPp6wakL9TVj8auVfiPhzX8NLIqtHnpID7T7JSg+Svd+sRR6RcRrYkco7CofpW4HrqPV6q3UKI4vRQmWvHYPmpu5t5pjZz+AOHnEeUXPU1mQeC9TOUV5KFJ/eCLp/iTDXEqtHTE02u3dE41oT7/XU4fW2U7iMRTHQWL/Rzqcj4j1BnWakyNQw/Zl/yBvkV80+UUpV6FPUWcXKVCTflJpG7MwgoV52O47jSNOhi6VdXpyuNpGn2MA6xlU2RGM6bx03INDbXhph+0NUIZFjYRggaQDARBAO0GDaAQy0Aw4wLQCaGw07w4iAREiDDCggQtoTGkEbQ4QE94cBeETQACIcBrCAggXgJJCGpggQQIcBASSABCGvKHhNzEkwlgmp4umiiTQG5VtVnpp0Hw2+34lfhGvkNYhOcYLNJ2Q7WNDKyjs2+2wy0t151WVDbaSpSz0AGpMXNgzgW/NZJrEjypVnQiSYUC6f316hHkLnyib0LDuG+G9Ldn3H2pZCBlfqU2f1iyfsJttfkhFyed94rPGPHio1HxJHCyHKbKH2TOrt6z4Pw8mh5XV3G0ZMsTXxTy4ZWX+z9euwUpqGnPoXPUMSYK4RU/1Rwy8i4QFCQlEZ5l3uoXv8XCO0VDij0k8R1POxh2XaospsHzZ6ZI/eIyo/Km/eKcLSnXVuurUt1asy1rJUpRPMk7mMoRYaRdR4ZRg89T35dX5EMtSfxaLoh89NztZnFztSnJidm17vTLinFn4k3gIRlTtDkpy2h1hqdTGh3FsKUY7D0qse0Zg5cCPNbvDhfe9oVi9GfxFG14cp/cDnHnJJFrwr23PxhZSVzOly2sBaoxgnqNYBVa2p84dgYT3jCrmCIfe8NUbW+sBBo87jIVy0hSM5O0acROU2cmJKcQbpelnVNrH5kkGMp12JhuQRI550Yy3RbuFPSXxJS8jGJJdutyg0L4szNJHXMBlX+YX7xcNPxXgri3IeqNLl55VrmnTqPDmWupSm99PvNqPeOP1NXHK0YQ0pp1DrK1IdQcyVpNikjmCNjGfW4ZRqPPT9yXVeRWlUp7O66MvPGnA5yXLkzhp5cw0LkyUwseIOyF6BfkbHuYpibk3pR9xl9pbL7RKVtOJKVJPQg6gxZuEOO1Sp5RJYpS5U5QWSJ1NvWWx+Lk6POyvxHaLNrFBw5xJpLc+h5uZbUMjFRlf7Vs/cVex05oXY9LbxRHE18K8uJV1/svXrtLIzU9Fv0OXDttA3ESjF2CqjhOZCZpKXZRxVmptoHw3Ox+6r8J16XGsRci0a0KkZrNF3QxpENtpGQQ20TItDd4FodbSG6iAVgEaQDDjqYba8BFjSbQ06xkhnlDRBjrwYAgwEgiHjaG2sYeNYRNCG8O2gAQ+2m8BJIAEFIvYQst4sXh3gEVtSKUpU0EUpBPhtE2M0Rv5IHM89hzIprVo0oucyRgwHw7exKUT89nYpCTpl0XMkbhHRPVXwFztauJcZUXhrTJeW8BCpnw7ylLYOUhJ2Us65EHqbqVyvuNbj7iHLYIYFPkUMvV9bYCGikFuSRb2VLTtmt7rewFidLA8/TMxM1KbenZ192Ym5hRW686rMpajzJMZtOjPGtVK2kOS6lMqjbyw+fkbPEmJ6tjOoCdq0xnKLhlhAytMJ+6hPId9SeZMa5DeoIAhyE2MPKQNenSNWMVFZYqyLadJREE3BHSFa3PWHZQUg2ggaDSHcvsA/WDy03hAWHeHAXMIdhhFodDsgENB+UA7Bv1hp3hwMAnUwDFe3+MIn5QucI6QCEdtIYqCbnUwQLwCaGEQLddoyEaQAIdxNDDqN4BAG+5h5GtrXhpTblpARaMS2wUi+/KPfhzE1WwfUDOUmZ8Mrsl5lYzNPpH2Vp5j6jkRHkIBPlDFp0IgaUllkropqUlI6Lw3jKi8Qaa/LhhCZkt/tdLmDnukbqSfto53FlJ520Uaux1w9coBXP08rfpJPtBRuuWJ5KPNPRXwNjvAGXpinzjM1KPOMzLKgtt1tWVSFDYgiL2wJxAYxg0ZCeS0zW0oILQSA3OJt7RSnbNa+ZGxFyNLgZU6M8HL2lHWPNFcZu+We/XzKLItA05RYOPsCikZ6nTEf5tUbuMjUyxPTqg8jy2PImvFXvaNKjWjWjmiWPQVoChDrwDaLRDCIFoeBAMBFjCYaTDzrDDtARYYN9IUG0AIIF4yAdoanzMOAsb8oCxBTqdBGQCGj59o22HKDMYjqzMgwcmb2nXSLhpse8o/0HMkCITkopyeyJrRG/wDgs4nnDMTSVJpMuqzhGheVv4aT9SeQ7kRZWPccNYGp7UpTw0a3MND1doJGSUbtZLhTte3uJ7ZjpbNlrVap/DvDDZZYQcgLMjKqP9q5uVK6gXzKPMkDnpz7NTc1VJ1+dnnlvzcwsuOurOqyef/TltGXSg8ZU9rU+BbLqVTk28kfHyMRLj765h9a3H3VFa3FqKlLUTckk7knnGdCLcrjcQkosP6Q7Le1o1i2FNRVkEGwtDwdhpaGgfOHhN9YVy5IQ84VucHLBy223hErAI1vBAg7C0SHA2EpzHOLKVh6SUEPT7uVTpFw02AVLWf3Ugn5CIykopyeyBtRV2SHhbwgr/FaorapqEy1Ml1BM1UZhJ8JrnlAGq121yjzJA1jJxmomFcEYiGD8Npdm5mlaVKqzC7remCNWkpHsoQgHUC5zEgk5Y7gnl0ng7wwqD9Mlks0/D8g46w1zW4B7JUealuFNzzJj5rF6Ym5h6bm3VPTcwtTrrizcrWokqUfMkmM7A4qeLnKptBaLt7WckZzqVEuSCBrCUm8EQbRpnckNA6w1RtDzb4w1Q+UAmixeDNGwrjfESsIYjD0nNVX2abVZddlMzAGjakn2VpWNADYhQABGaMfFPg/X+FNSQzUkpmabMKIlaiwk+E9b7JvqhYG6T5gkaxW4dfk5hmblXVMzLC0uNOINihaTdKh3BAMfS6mOUjjNwtp0xVJRL9Pr8ghx9vm25ayik8lIcCrHlaM3G4meEnGpvB6NdO44XUlCo09mfNcGD00iSY9wfN4BxdVMPTygt2Rcsh0CwebUMyFj95JB7G45RHAI0YyUkpLZnWmmrobtCULWgmFa/lDAZy0EMNr63jLDTYD+kNEWjCUHUW+MYDnYdQ6ytaHm1BaFoJSpKgbggjYgx6iCTeMShcWhlNSmpIu/AuN0YwlFys8GxWWGz4yCkZZtu3tLCdr299Pe40vavse4NOHZkTUolRpcwqyBuWF7+GT05pPMabgxD5aZmaXOMTsm8pial1hxtxB1SobGL8oVakMf4cdW8wgZwGJ6VSbeGvcFPQG2ZJ5EEctcupB4Op7Wn8D3XQphJt5Jb8igtraGAd9bxtsR0GYw9VXpJ850j22nbWDrZ2UP5EciCI1ZToLmNOMlJKS2LFqN5aQ2xMPKbw084kDGEdYBtrB2haQEAADrBtrcn4QrW1AtDtTuNOsAIdvsLQ7L05Q3Nppyh9xrrpATQQTuR8LRfODMPsYQw+47PLSxMKR6zOuqF/BSkXCPyjlzUbdIr/hjh4VKqmqTDeaVpygUBQ0W8dU+YSPa/h6xteLmJNGsOyyzc5X50g/Ftv8A9Z7lPSMzFN16qw0dt369chSnZXXgQfFeJX8XVpyfdCm5dA8KVYJ/smwdB5nUk8yTGsbSLa7RiSANLWHKMyTp5axoRioJRjokSpwshyNxYRkAG0MG+mx1h99Tbbyhl6DYdIcE384A37Q8HSEWIQF9Izyss9OzLErLNOPTL60tNNNi6lrUbBIHMk6Ri0MXz6LOEWqviupYhmEBTdFbSiXvsH3L+15pQlVu6hHPia6oUpVZciM5ZUM4i8LZThNwglnp5DU1iytTzMu/Me8mUbCVOKaa+KEhS9zqBYb7P0Oaa1NYyxHU1pzOSNPQ02T9kuuan5N2+MTf0spJc1w3pc0kaSlWbz9gtpxI+tvnFf8Aoc1duWxviOlrNlz1NS633LTgJH8KyfhGSq06/DZ1JPV3+/kcbbSafVfguv0qaiqU4L1BhFx69Oysur93OVkf8sRwglNh3juf0qJRU1wemnBc+q1CVeVbpmUj+axHDYtYxfwVr9Np1Zfho6yY0Q68LLCAtGudgDDDGS0NV3hCaMDiCUmO8PRPn1TnBaSZWSfUp+al09k5gsD/AJhjhNextHdHooShk+DMu6oEet1GaeT5XSi/zQYyeNW/S69UcOIj78WVT6ZNMal8VYYqiEgOzkg4w4R9rwnLpPyct8I0/DjhVJ8WuD0y7T225fFtGn3mGX/dTNtlKHEtOfFSgle40BuNvf6Y9XbmcY4bpSDdcjT1vOdi65p/dbB+MTz0SJVcrw0q8yoEJm6s4UX5hDTaT9SflFLrTocOhUi7NW+/kVRbskur/JyBNyr0lMvS0y0tmYYWptxtYspCkmxSRyIItGE6xf3pUYPapOJ6diSWQEt1pCkTIA09Ybt7XmpBT8Uk84oH4xrYauq9KNWPM7IyzIb8YadTsPhDyde0C/aL0DGqFhYbxiUNAYymGKIIMMi0YVJzDXaNjhbEcxhOtInmQVy6x4Uyz/tWidR5iwIPIgR4DtaMLmxFoUoqcXGWzOarC+peuMaGzi2htrkVJeeSn1iSdTp4iVC5T+YcuSh5xSBAudLERY3CjEXiNvYemFnOgKmJMk69XGx9VjyV1jWcRaEKfUhUmU5ZafUc4A0S99ryze9/F0jPwrdCo8PLbdDhPMs3zIT0hqhDibJv0gKINuto0xsZbTvDYfa+trCGk2HnARYQDlMZEi8MA5AwQepOsAIyJGpta9oKQpeVCUlS1KASkDUnkIFyoADS8S7hvSf0jiVMytN2Kenx9dvE2QPnr+WK6tRU4Ob5Em3bQtCntyuA8JFUwErTT2S6+kf659VvZ+KylHkIoR6ZfqM5MT0054kxMrU64vqom5ixeLVav6hRGVH/AL3MDruGx8syvzCK3SkAAA6HlHJgKbUHVlvIilml2IeBltljKncbadIxjufhGQEWFtI7ToQUk2N4fYjb6QwWPeHA6WhE0ZNAIVzygDQd4mvC3h/McR8Vy9KQpbMi3Z2dmUC5ZZuAbX0zEmyR1N9gYhOcacXOTskNyUVdkLB0N46w9EpxtWDcQJBHjCqAr62LKcv8lRytUlsLqM76q0WZUPuBpoqzFCAohIJO5tbWLk9FjGDdGxtP4dml5Wa80Cxc/DaGrlI/MgrHmBHDxWm6mEmo8tfkUVJ3yy5HTvFLCy8bcO6/RWUZpp1jxZYcy82QtA+JTl/NHCnD3GCuH+PKFiIJWWZN8esIG6mFApcT55VH4gR9GGllCgUnUG4I5RxJ6RvDdWD8Yu1KTZy0WuKVMMlI9lp7d1rtqcw7K7GMngleMlLCz2fpkKkb3XU7Ex/RWsc8PK5SZVaHk1ORUZVxJularBxpQ8yE/OPnIAbagpN9QdwekdYeixxQ/TFDOC6i/apUdBXIrUdXZa98o6lsn+Ej7sVJx/wMcGcQJt+Xay0qslU7LED2UqUf1rf5Vkm3RSY6eGJ4atPCT712lmHlr3/AHKsCYJABggQCn4xuHcIgRiKYyWhEdIYmjApKspygqUdgNyekfSXh7h5vA/Dqg0eZdQwKbIpMy4rQIXYrdUewUVfKONfR7wIcacRJN+Zaz0miFM9M5h7K1JP6pv8ywD5JVFyelVxT/QlBGDKdMf51rKM86pJ1ZlSfdPQuEW/dB+8Iw+J3xNaGEh3vsM/ES97Tl9zmLiVjE8QMeV3EQzerzb1pZB3SwgBDY88qQfMmO6eFWFVYJ4b4foryMs20x40yk7h5wlax8CrL+WOUfRy4anGeMm6lOM5qHQ1JmHioey89e7TXfUZiPup7iO3X3LkknU63jl43XjFRwsOXpChHZdDnn0tHG04JoSVH9aqqXQOwZXm/mmOSL6RefpVYvRWcaU/Dss5maoTKjMWOnrLtiU/lQEDzJik6cuXRUpL1touy3jth1sEpK0FQCgCNtL6xrcLpunhIKXPX5koT0lLkYNxCPO8TXijw9meHGKpiluKU7Iru7JTChYvM3IF+WYEWUOovsREJJCo76c41IqcHdMuUrq6Gm94aRpDjpprDdxExMYofWMZF4yHWAdu8MrauMl5qYps5LTso54czLOJdbWOSgbiL3n2pXGuGAqXSlLVQaDzAOvhPC9k/lWFIPYxQyhcWiyOFFYztT9EdUf1d5yXF/JLif8A6VflVHFjqbcFVjvE5/hn2MrxaVoUUKSUqSSFJI1BG4MMPUe9aJdxFpZkcQqmkABmop8YW2Dl7LHzsr80RDSwJvmjqpTVSCkuZZcaDvfpDVb9oePO6YaQL2vrFgmEWvcg6w/S2twYYBfeHAkn/B2gGhyTt0t9YubhpTEymHWnV2QufcL61nSzY9lPwAClfGKbbacmXGpZgXceWG0juSAPqYuzFswjDuDZ9phQSG2UyLJH4vYv/CFmM/HtyUaS/kwcra9Cnq5VV1+uz9SsQJl0qRf7KBogfBIAjzjLodYwM6DbSM1rEjlHckopJch0o2iO11Jhw23hvOHpHygL0EaQ+1hAHaHdt/OESQhprHWvo00lFKwMaslI9bqk0twr/A2ShCfK4WfjHJCz7Jjrz0e6k1PcMqa0hV3JJ1+XcA+yfEKx/dcBjH422sLpzaIuzkkc88VMJuYNx1VpEoKZV91U3KKtotlwlSbeRuk90mIP40xIzTE5KurZm5dxLrTqDZSFpNwQeoIEdwcUOG8vxKw8lhCmmKzJZlyMw4bJufeaWeSFWGv2SAdr34vq9InaLUJmnVKVclZ6VWW3mHU2UhQ5H+d9iLEaRfw7GRxNJX+Jbr11ION45Gdy8HeKMpxPwymczIarUoEt1GVBtkWdnEj7i7Ejobp5ayfGuD6dj/DM5QamCJeYspt5IuuXdHuOJ7i+3MEjnHz1wriur4BxBL12iTHgzbNwpKhdt5B95taeaT/AIEWIBju/hfxUonFGj+uU5Xq9QYSPXKc4q7kurqD9pBOyh5GxjC4hgJ4Op7eh8P2/r/hVCV/cnucTVykYj4R45SlSjJ1ukvJeZfb1Q4PsrT95ChfzBIOt46nmZmkekrwrUZENS1elFBaWVq1k5sJ9wn/AGbguArpY7pMTTilwupnFGg+qTJRLVWWuqSn8ty0o7oVbUtq5jkdRrvxlTahivgNj1xRYVLz8sQ3NSbhuzNsk3tce8k7pWNjqNbiNCnVjxCmqlN2qw9fJileMrkcmpR+Qmn5WZZWzMy61NOtOCykLSbFJHUEWjFa20dC8ScP0njBho8R8FArn5dATVqfb9cLJ95SRu4kDcaLSLjVJEc98tLRq4euq0b2s1uujNGjUVSNwa8ofLSz87MsSsqyt+afWlpppsXU4tRsEgdSYYTZJOlhHQ3DLDtJ4O4cHEjGyfDnn0FNIpxH685k+8lJ2WoHQnRCTc6kCDEV1Rje129l1Yq1RQRYck9R/Rp4TpcqAbmK7NkuLZQr2pycKf7MH/ZtiwKuQBO6hHKFIpWJeMGPFgEzldrDxeeeXo20n7S1fdbQmw7AADW0bSqVLFnHrHzRTLmYn5kluUkmjZmUZBva50SkbqWdzqeQjsrhdwupnC2hGUlimZq00AZ6fy2LyhshN9Utp5DnuddsmdWPDqbqVNas/XyX1M5Jyd/XebvBGDqbw/wvJUGlgliXBU4+oWXMOn33FdybacgAOURnjFxSkuFmGFzasj1amwpumyqtc7g3cUPuIuCepsnnp6uJ/FSicLKL63Ull+oPpPqdObVZyYV1/CgHdR8hc6RwZizFlYx/iKZrlcf8acf0SlIs2yge62hPJI/xJuSTHBw7h88ZU9vX+H7/ANf8HOX+OBrVzExUJqYnZx5b83MuKddecN1OLUbqUT1JN4mPC7CLmM8eUenBJMq06JqbWBohlshSr+eiR3UIjVJo87WqhK0ymyrs3PTSw2yw0LqWroP5k7AC5jtHhfw2luGeH1y61tzFbncq56ZRqm42aQfuJudftG52tbe4ljY4Wk7fE9l66Fihp7NEZ9JOkIq+BzVVJBmqXModCuYQ4QhafK5QfyxyNfaOwfSBqTUnwwqiHFALnHWJZtN91FwLPyS2oxx6nYRRwNyeFs+rsTulJpC5Q294RN4CtRGwNsGkNO9jB7Q22sMrYDqO0eugVc4fr9PqYF0y7oLifvNnRY+KSRHlP0jC4i47QNJpplVSN0XNxIpiZmgPOJ9p2QdD6VDmg+yr5gpV8Ip0/i94HlF14ZmG8QYQpwfVcuy6pJ4nXVN27/wlBilnEOtLW06LOtKKCD1GhjgwLcVKk/4sIyvr1G672sn+cMNhrrrzhD7V+kJXva+7b6RoDYRrtvDgCb3MBJtrbeH5rC9toBo32Bpf1nFtNuPYYUZg/kSVD6gRK+K04U0+kyI2edcfV3CQEp+qlRquF0v41an5jkzK5fipaR/IGMfFN4OYklWATll5NGnQqKln6ERny9/GJdF6+5W9u9kQbFwNTGW+bY6jqIwp67DpDwRYW3jvL4vQyJNocN9IxAw+EWJmUGDfSGAkQVLCUknYC8Ilc9IkJhUi5PBlXqaHEsF0+74iklQT3Nkk+UWDwM4jNYHxG/Tqo/4dEq5Slbqj7Mu8NEOH8JBKVdiDyiUY2wWul8EqG2w2fFp7zdQnCB7xfRZSj+6VNp8hFCvtZxtHGnTxtGUXtdr5c/yUSzS1W6Po2xdOn/WItxF4X0biXJIE3+yVeXRklqi2i6kDkhxP22+26fsnkeeeDfHpeFksYfxS647RkWRLT1ipcoPuqG6m+ltU8rjQdYSU2zOSzE1KvNTEs+gLbeaWFIcSdlJUNCI8nXoYjh9bMtOj5P10LIzjVXacJ44wDW8CVMyFZky0V3LL6PaZmEj7Ta+Y6jQjmBEco1YquFKvL1eizrslUJY3Q80de4I2IOxB0MfRWqUem4jpb1Mq8kxPU97VTD6bi/JQO6VDkoEEdY5n4jejRUaSHqhhEu1Wn6qVIrsZpkfh5Ojysrsd43cHxaliF7Oro/o/XQhUgn8XzLM4Q+kZSMciXpNd8Gk4kNkJBOWXm1f+Go+6o/cJ8idon/EnhlReJtH9SqqCxPMAiVnm0/rZZR3FvtIJ3QfMWOsfO6bkVIWtC0FK0KKVJULFJG4IOx7Rc/C/0lK7gsMU3EaXq1Q0WSlZV+1S6fwrPvpH3VfAiKcTwmdOft8E7Pp5eTKszj7tTbqaF+Txt6O2N0vIPgTB9xabrlagyDtyzDtopJ6GNpiqkUXHshN4vwWz6u+0kv1jD9wXZI/afaA99knU29zcgDbrCUqGCON2FnmG3pasUtdlONXyPyq7aKKfeaWOStu5Ecw4/wCD2IeDNUViSiBdRpjBKpWfSP1kio6BTyBobcle4eY+zFuFxsa07TWSqtO/181yuEZSpvPDU1uFKXRMAyUpi3GbPrMy4kP0fD1wHJw/ZfeB9xkHUX97cAjfXS8njb0iMbredPjzH23FXTKU5knQc8o7aqUepiScP+EGIeNVTOJa4F02nvqzTNRIuueUNLsoVt0J9wfZH2Y6fmalgjglhRmXeelaPTW9W27lb80vmoAe06s8z/IQsVjY0Z2gs9V6d3r5vnYHJ1PfmZeGvDGi8MKN6lTEF+emAPW59xP62ZUNhb7KAdkDzNzrEB4v+kXR8CB+lUMs1fEoukoBzS8of/EUPeUPuA+ZG0UlxS9JivY18emYbS9RKEu6VLSr9rmE8wpY9xJ+6n4qMUtKSKlrQhCCpayEpSkXKidgANzFeG4TKpP2+Nd2+Xn5ISbnpDRdT11qs1XFtYmaxWp56dqMwbuPOnW3IAbJSNgBYCJBgfAFcx7VP0dRJTxSiyn5hw5WZdJ+04vl2GpPIGLb4dejNU6sGaji4u0mnmykyCLCbeH4r6Mjzur8I3jpmk0emYZpTVMo8ixI05rVLLIsL81EnVSjzUSSesX43i9LDr2dHV/ReuhbTgkrQ+ZDuHXC6jcM5FSZP9rq8wjJM1JxFlrHNCB9hu/Lc/aJ0AlLxClW1vD56cYkpZ6ZmX2mJVhBcdeeWEIbSN1KUdAI5N4x8e1YlRM4fwm443SHAW5qfIKHJsc0IG6WzzvqrsNDg0KGI4hWcn4vkvXQnOpGkrc2afjtxIZxviFil0t4O0OkFSUOoPszDx0W4OqQAEp6gE/aitfUZlMkid8BXqinSyHbeznACinzsoGPE0jInSL6wJghVX4JVwTCSHZ55yekgd7sIslQ/eKXE+Rj1rdPBUoxW10vnz/JVG61e73KJ5wLwswUMw2IvC5XjsLRp0MCEYW0MiInTvGNVrc4eTrDVG8MiyyeFc0XaXVZG/8AYPIfT2C0lJ+qExFMaynqmKaknZLq0vpt+NIUfqTG04WvlFenZcHSYk1m3dCkrH0Bh/ExkN1iSd/2stlJHVK1D+REZ8fcxbXVFMNrdGQqxF/av1vAVYgpvrBXptoDzgGwOYXjQLAAg7wdb/4QASdzoYK7a69oALH4VoyM1h4WuVso+izEc4gOFeMqmP8AZ+E3/C0gRKuF1k0OqL5maT/9s/4xD8ajNjGukkE+srHytGfS1xc32eRBaqPezSJtYXGt4cRz77w0DWFubdI0C4eDfflzh9yOUYwRtDgq2nKFYkmZQYxvn9Uv90w4Ha0Mc1SRCHL4bHc8suUq1LaQpluYp87KIC2l+640tsXSexBjlvibw0m8BVMKQHJihTSz6nOEfHwnLbOJH8Q9oabWzwIxi1iDCzdGdc/znRU+GUE6rl7+wsdct8h6WT1i2X5WVqUm/Iz8szNyUwMrsu8nMhwdx1G4IsQdQRHkqWJnw/ESpyV1f00OPvwUo7nBLzAUNBEt4fcV8R8NJnLT3hM0pasztOmSSyrqU21Qr8SfiDFnY/8AR9nJPxKhhHxJ+TN1KpyzmmWf3D/rU+Vl9jvFFzEspta23EFLiCUqSoWKVDcEHYx6OFShi6elpJlM6WZ3WjO4eHPGfDPENCGJOZ9Sq5HtU2bUA6TzyK2cHlr1AizGXja1vnHzEWwpCgtBKVpOZJBsQeoMXLw/9JXE+Ey1J14Kr1KTZN3l5ZptP4XfteS7+YjCxnAWrzwzv2P8PzEq8o6VF4nU2POE2GOI6VO1OUMvVCLJqUpZL3bPycHZWvQiOVuIno/YpwOHptDAq1FRr69JIJLaerjfvI89U/ijq3AXFLC3ERlP6DqaFzYTmXIvjw5lv8hPtDukkROkOWsUqII5g6xxUOIYnBS9nUV0uT/BarSV4PQ+auGG6+zXpNeFnJ9FZzWZVTyrxf7v2et9Osdj0TjAxgzDKGuJuKKC/iG1jJ0lPrD2Qi2V0N3QVnnbKnzjbY+4FYWxs1NPS6XaJVZkWcmqd7CHv96yLJX5jKe5jlXHnAPFfD9LszMyYnqOg3FQkAVtpHVafeb/ADC3cxre1wvEkoydn9fBnO4SjPTT7HStd4vNY0w0WuF+J6CziIiwkqoj1d7IBbK0lyyAscr5k9LRxxilrEDtfnF4rXPrraVWfNQKvFH8Ww6W06RMcBcBcV8QPDmZSTTI0lRv+kJ8FDSh1QLZnPyi3cR1VgTgThjBSJV6c8WvVaXH6uaqPtNs9mmSSlHmcx7iBVcNw28Yu7+viwUJSleWv2OZ+HPo/wCKMcJZnFMCk0RzUT06kguD/wAJv3l+eie8dWYD4SYY4bIS5TZQzFVtZVTm7KfPXJybHZOvUmJ2t8G5Jue5iD494p4Y4dsFVeqaG5spzIkWR4ky55NjYd1EDvGRiOIYnGy9nTVk+S/Je7RV5vQlzzw589oq/iTxnwzw8Q4xOTPrtXt7NNlFAu9s52bHnr0BjnfiB6TGJsWeNJUFJoNKXdJU0vNNOJ7u/Y8kW8zFLoZK1FaiVKUcxUTck9THfg+BN2liX4L8srdeUtKa8SacQeK2JOJT4RUHhLUpCszVNliQ0k8iq+q1d1fACIe2zl5RnYllOONttoUt1whKUJF1KJ2AA1Ji9cA+jxOzqmp/F3iU6T0UmnINpp3ss/6oed19hvG7OrQwdPW0UhQp2d3qyC8MOGU5j+plbniS1AlFj1ycA16+E3fdwj+Ee0eV+pp/1WnUl1pppuWkJGUWltpHutNIbNk+QA+O8bFiTlaVJMSMhLMykjLJyMy7KcqEDsOp3JNyTqSYqfjtjFugYUVSGnB+lK0ktBAOqJe/6xZ/etkHW6ukebq4mpxHERhFWjfT8tl8l7OLlLc5ebN20DnYQ4naGjQQb2+EeuILYV4W0K4gEX1MMAE3gW6wTDbwEWyScPXC3jKnW0Dgda/iaWI3/FBH6ikPj3ip5H0Qf8YjOBzbGdDJ5zSR/MRLOJqAaNTVnlMqH/LH+EcFXTFwfZ5lV9H4FapG511EAm/y2gixvqbGArTS+gjvJ8gp21hEXJ00gDneHr1GggDkWZwuWP0LVE9JlJ+bZ/wiH45u3jWud5lSvmAf6xJuFTw8KsskgqzMr+ix/URHuIbZRjCfUf8AXJZdHxaT/wBY4KWmLmuzyK+UfE0CbL7doJ+sYQcuojKhYI136x3l8ZJivrrDk+1CKbwCSk6QD2HbQbZjp8oaF6iDmvCJXPTRq5UcLViWq9JmCxOyyrpUBcEHQpUOaSNCDuI624c8U6TxDlktMlMnW20Xepy1am26miffT/eHPqeP1JvvvHnT40o+2+w4tl9pQW242opUkjYgjUHvHDjcBTxcddJLZlF5UpZo7H0MaWLDW8aPFvD7DePEKVWpD9utlTPyyg3Mp6XVYhY7LB7Wjn7AvpIz9M8OTxbLrqMvsJ9gATCe606Jc89FdzHQ+GsWUXGEqZqh1OXnm0i60Nmzjf7zZspPxFu8eWrYXFYGebVdq29d50wq06unM56xh6OuI6N4kxRFJrsiLnKwnJMpHdon2vNBV5CKdmZFTLrjLram3WzlWhaSlST0IOoMfQlp0WHMbxrMS4Ow7jVnJXaSxNuAWTMatzCPJ1NlfA3HaNDDcdlHSur9q8hypvvPn+lDsq828w4tp5s5kONqKVJPUEagxdWA/SixThcNSuIGxX6egBPiOryTSB2c2X+cE94l9d9FzxZ1tVAr6ESS12cbqTZLjSeoUgWX5EJMWPgjgPhDBimph6V/TVTTr6zPoCkIV1Q1qkeZzHuI68XxDA1af7nvdnP+jmdFp3hoyf4KxpIY6oTFYprE8zKvaBM7LKZVftfRQ/Ekkd4khdy8+VvMdI14eUpepuQLDnpFZ484+4PwMl1gzoqtVRcepU9QWUq6Lc91HzJ7R5iFGVeploRfdv8AUvclCP7jLbVM3t1AsOw6RHsZYzkMEUN+sVJuddlWd0ycsp5d+9tEj8SiB3iBYC4/YPxwGpdU5+iasvT1OfUEZldEOe6r6HtFnKdUhVjdJtqNtIU6UqFRRrxfdt9QTU4/ts46x36UmKMSh2Vw40KBT13T4zag5NrH+82R+QX7xSK0vTb7j8w448+6rMtxxRUpZ6knUnzjuHHPAnCOMi5MtSopFTVc+s09ASlZ6ra0SrzGU94rWh+i4tM64uu4gZ9RQqyG6c2S66nqVLFkfJUeowfEMDTp/t+72c/7KFQd7z1ZzlLySnHG2m0KW64QlKEAlSieQA1Ji48HejpiOt+HM1opoMgbHLMIzzSx2Zv7Pmsp8jHSOGcEYcwS3loNKZlXrWVNG7kwvzdV7Q8k2HaNs47bY/GOTE8dk/doLxfkdEaT7iNYR4e4bwE2DRZDLPWsqoTJDkyryXYBsdkAd7xvHTpvGnxLiyjYTlfW67VJeQaIuhLqvbc/cQLqV8BHPGOvSSnqkHJPCUsunsH2TUJgAzCu6E6pb89VeUZ9HC4rHTz79r29dwp1qdHRblu8R+J1H4eSpTMKTN1laMzFNQr2jfZThHuI+p5DmORK5XqjimsTNWqr5enZhVyQLJSBoEpHJIGgHKNctb02+5MTDq3n3VFa3XFFSlqO5JOpMPAttHqsDgKeEjprJ7s5s0qjzSHiBCG3eBeO0tuImG5rm0OvpGMwyNx19e8A/WFbW5gEwCN/gZJXjOiDpMg/IE/0iWcTVWotMR1mVH5Nj/GI1w6bLmMZFQ/1SHnSfJpf9bRv+KbgQxRmOeZ5f0QP8Y4KuuLguzzKuT70V4NB7u0N1O40gJBB12gn2gLR3llw6crkiBe2p1J3hctjBtca2MAyZcL3stdnGiRZ2VKgO6VpP8rxm4oSpTWZGZto/KBN+pQtSf5ZY0eCZn1TF9KUtQCHXSwentpKf5kRM+KMmXaPTpy2svMKaUegcSCPq2fnGfP3MXF9UQWz7GVha2+8DbWClXWH2Cto0CxK+wUr5bpjJlChpqBGC1vOHJWUn+sImpW0Y7LY7QucPzgjWwPXlAKDpASy31Qr9YarWFChEWY1NJVeBKvzdMmm5qRmXpaaaN0PMLKFp8lDURlHeEU3h76MqlSUi28J+kliOj5GK/LNVqWGhd0amB3zAZVfmF+8XrhDjXg3FammmKqmRnl2HqtQAZVfoFE5FfA/COLC1eMK5cHleMvEcIw1bVLK+zyBTq09nddp9I0OkW5ZtR3j0Nv2Fjzj5+4W4mYuwTlRSazMIlEm5lH/ANcwfyKuB8LRduFPSmlHfDYxPSFyq9jN08+I35lpRzD4KPlGHiOCYinrD3l2b/ItjiovSasWzxS4f1HiFTfVJDFU9SBlsqVQAZZ/9/LZf1UPwxydizgvizBCVvT9LU/TkH/TpL9cx8SBdH5gI7Gw1jWhYvY8ah1aVnkgXKGl/rE/vNmyh8RG+Q+UlRSspNrXBt8IhheJVsH+1KOi5Ws/XeSdCE3ni/ycNYS4L4sxwlD9Opimaev/ALdO/qWD5KOq/AoMdY8K8AVPh5TDK1HFk7V0qTZMmU2lpf9wquv6pH4YmbkwVaqWSBpry7RocSYzoWEmPHrdWlZFJF0peX+sWPwoF1H4CDF8Sr4z9qMdHytd+u4FQhB55P8EoceCRcnePKt3MSRrYfIRzriz0pZFlTjOGaQ5OLGgmqgS235htJzH4lPlFI4q4m4txrmbqtXeMoo/wCiS/6lgfkTv+a8Sw3A8RU1n7q7d/kRli4rSCudZYu41YPwkXGpirInZ5P/AGSn2fWD0Kgcifir4RRWLfSUxFWPEYoEqzRZY6eMbPTJ75iMqfgL94phti3KMobjew/B8NR1azPt8iiU6tTd2XYKcmpuqTbk3PTL01NOm63n3CtavMnWGJbtGXIAIVo1FpogjSSANBBvrC0EC+sBZsG/aAT0gXhbwCuAmD/OERaBYkwAK+o6QFG0FRAjGdYCLZOeFcuV1qfmLaMyak36Fa0p/lmgcT3/ABKzIy9/7CVzHzUtR/kBG74WSfg0epThveYmEsp7htNz9XB8ohuOJoTeLqqUnM2ysMJ8m0hP8wYz4e/i5PoiC+FdrNGDfYnSEbAb7wNQLAWvzgnbXW0aBYBJ5HnBIGp+ENBG3OHJ35wDG+IuXW262SHW1BaT0UDcfUReeIGk4hwnPqZTmE1KicYA19pIDoHyzJ+MUYoGxvqIuHhpVvWsOso956mOlooPNBJWj+a0/CODHppRqr+LIJe849SnkkKGh0O0OF0xssS0X9BV6ekU38Npy7R6tq9pB/hIjVhRTofrHdFqSTXMlCWmpmCgR7W8EpBEMFlWsdekOCinTnAW3vuNsR/0jIlZA0OnQwhZdraGAU9YAs1qh4KVb6HvAymGZjzFx1EOSuw0Nx0hDzJ7h5QANO0OzBW+kEp0JgHa+wwm0DcQ7LcwstrdYCNhpRmjEtkGPRAOsO4nBM8rPjSj6H5Z1xl9s3Q62opUk9iNRFqYU9IfFuHvDYqim65JJ0tNHK+B2dGp/MFRXDLCn3W2UJu44oJSLgXJNhqe8TPiJwoqvDd+hSNYcYNVqrCnzLsqzJY/WZAgr2UrrbQdTvHPXhQq2p1knfbqUOGR+67M2eK/SHxZiHxGKYW6JJnT9mOZ8ju6dvyhMVY8XpyYcmJl5x+YcN1uurKlKPdR1MT3iDwsqnDEUVmtLYFSqTC5hcu0rOJcBeUJKhoVbk20HUxCdBBhqdCEL0ErdgKnn96buYkNdofkhwhE946C1RSEAIEEGGk2hhcN7QCYnGEeFtWxXhPEeKkOsMUShsOuOuLUFOOuIQFeGlA12Iuo2AB0udIgp89IhGcZNpPbcjmvsG8AmAINomABraHXtsYQ7bwcoGpgJAGsNKrbQlr+cMGp7QEW+SFvAOggk8o2mG6T+nK7ISB/s3XAXT0bT7Sz/CDCbUU5PkVyehb+HWE4fwrTy6LerSxnX7/eILpHyyj4RR3irmHVPOm7jiitR6km5+pi4OJNVMrh19CfYcqToZCRyQPbX8AAlPxink2KQNbxw4FNqVV/yY7e8o9Bw31hqjY9odcnS3nDTa9hcx3kg626wRpqToIA5wgdNjY7wDD71iB8IlPDirinYkRLOKAYqCfAN9gu92z/ABafmiLC2tr3hi7gpWklKhqFDcHrEKkFUg4PmQmnuty0uKdJLsrI1dtJzs/sr+n2Tctk/HMn+GKxCgRF6UmclsaYYCpkjJPNFiat/q3BbMoDqFZXB5iKRqNPmKPUJmRmk5ZiWcLawNrjmOx3HYxyYGo8rpS3iSvrdbMwFPMGHBX3h8YYlcZRZQjuJrsCB0MG5Oh2jHqk6Q6+fsYRNSCRYeyYcyy7MupaZaW48o2ShtJUo+QGpje4ow8vDbtIBzKaqFNl55CzsrOi6gPJVx8IvXgA+aTw2xbWcPSMtN4tYWsBLxOYoShKkIFtbH9YbAjMoW5Ry4jFKjS9pRX2+pW5Jq6ObHEOMOLaebUhxBspKgUqSehB2hJPRVvOLm4wYuovEfBWFMUpVJy+JluOSk5Ktqu4pKRueZSk2IKtbOWubR5uG3Az/L/DP6afxC3S0qmFstNLlw74iU2BVfOm3tEj4Qli4Rpe1re7rbxCM77FS5iNxcwbgm4NvOOim/RUZIv/AJdS3/kf/zsY530UZ31J1yl4qkZ2bSLoYcly0HDyGcLUEk9SLd4qXE8I3ZT+/kWqZz1lB53gJaW4tCG0lS1kJSlIuVE7ADmY9UrRahOVpqjMSriqm7MCVTL2svxc2XL2N9I6n4XcAprh/i6jV6fxNIuzkoHFOU9hknNmbUmyVqUCbE3uE8tOsW4rGU8NG83ryXUTnfZHLFWo8/Qqm5TqnKuyk8ytAdYdFloJAIBHI2I0joL0ul+Ji3BoJ2kVC//AB4rLjqsnjFiojUGcbNz/u24sT0rHfFxVhIjlKKH/PjmlP2lbDzfNN/RHPN3TfrmZvTBdK8VYYSTqmnuC/8AxjHOKhb/ABjoP0sng7irDpHKQcFv+MqOfswEW8M/8sPXMtStc32GcCYlxoXhQKLO1EMf2i2G7oQeQKjYA9r3jy4iwpW8Jzok67S5unTJGZLcy2U5h1SdiO4Jjo2ZxRVMM+jHh6oYMmUSEw2tv1yYaQlTiSpxaXVag2V4mQE72Ijy8TatO1v0csM1DE6m368++y4y+pASs5i4b2GxLQSTbfQxVDH1HUV4rK5OO+t1zIKd3bxOZMp6x6ZGmTdUfUzJS7sw8ltbqkNJKiEJSVKUegABJPKLZpGBKBUPR/reKWGHncRSs2EuOuOey0hDiAUoSNBdLgJJudNLCJD6PzuXAHE5IbQHFSZQF5RmsZd+6b720BttcR0VcZGNOU4q+V28dPMbl0PRwbVl9HjiqEn3g9cf/DJjnunSzU3PSzD8wiWYddQ2t9YulpJUAVkdADf4RffB90J4B8Sk31Uh6/8A5YRRFNkv0pUpGQDgbM2+2wFkXCc6gm9udrxDDP8Adrd/4RCOiv63ZLuKmDaJgfE6aZQa+3XJNUuh4vIyEtqNxlJQSk6AKFjsoXiKP0WoS1MlKnMSjzVPnFrbYfWmyXSm2bL1AuNRpyiW8W8DU/hxiGWotOm3poeoIfefeSE53FKWDZI2HsiwufOLA9IGYXMYM4dLcVdQlbXPP9nYMOGJsqUU82bntsr7Ek7LXl52KFzBI0jGtZVtA1VpaCAEmO8bbY0I1uYR7bQSq+whBF4CNugwC5iz+F1ILMrPVhxPtO/sjH7osXCP7qf4oryRknahOy8nLIzzMw4G0J6knn2i7atNyuDMMZpeykyLYZlrj+1dN7Kt3VmWewMcOOqPKqUd5DSSd3yKz4jVYVHERlWjdinp8DTYuXu4fn7P5YiyTsNz2hoBVda1FSlakncnrBGlrC0ddOCpwUFyIwvu+YtRe+0AnTTaCbfKGnn1iY2HncQTsLCBa3ODcnfQQDQ8A8zrDdSCDAvYG0E9IBvYlvDfEApNZMhMLCZKoEIBJsG3dkK7A3ynzB5RJuKGHDMyqK1Lo/XyoDM2kDUt3shZ/dPsHtl6GKmWkEWi8MCYmRiSjLamgh2flk+DMtuah9sjKFHsoeyrvrzEZ2Ki6NRYiHiQh/o/ApKw2gpNjEhxjhheGqqWkZlSL4Lks4rcpvqk/iSdD8DsREdOgjvhOM4qUdmC0MoIIhquohl4JJiRLNcunBfEPB9dwnI4Wx3KoSaddEpPKC9EchnR7SFAac0kAX1ET3CFT4V4Hm5qboWJmmHZpsNOB2fUtKgCCDlKBqDseVz1jlVSLwwIsecZ1Xhsal0ptJ7rkVqcotaJ2J1xOk6C1jCcm8OT0pNU6d/aAJdV0suKvnRtoM1yOyu0WXIYS4KCnyaahiBp2cSygPuIqK0hTmUZiBk0F76RQKNrdYCpcgXveLp4aUoRgqjVua3feDi2tEvXidFjCHARSda6kf8Iz/APAEWLBz3BvAlXNUouJWmpotKZPiVBa0qSq1wU5BfYeUcnlnreF4HQxRPh0pxcZVpNPu8iCTTuor6+Z13RZbhTO49YrVJraH8RzE2uaaS3PKUFvKzE2QUdzpeNz+juH0zxWTVV1Iqxy24koYVOKNlBqwAby2t4etr9442pk9NUKoydSknfDm5N1LzStwFJNxccx2i7kekJRVLTVl4OQMToa8JMyhSMtrWy57ZwntvbS8cOJ4fWg705SldNbr5dxYprRTS3vz9XJ9jSi8IahimpTmIqyliuOuJVMsmoKbyrCUgeyEG2gHOK34/4womKsQUCYpFTl59qVl1JdXLkkIPi5rbb2ioq3U5zElXnatUFhc7Oul50gWFzyA5AaAdhHjDRA6R3YfAezcJzm24rblsO8nfRWfrqXLx8xRR8WVujTVKqsrPoalVtrDCifDJXmFza2oPnpEY4acPFcQKvMMOTQkqdJNh2ambAlKSdEpvpc2Op0ABJ6RA20BIMbSXxHNyOHKrRGVKQ1U3mXHlJNsyGwv2D2JUD+WLo4eVGgqVF6rm+8m5tRu0dQ0Ko8K8J4bqGFkYnk5inTqlesszc6HgSpISqxQkBN7DbmAYZjCu8J8cNyDNYxNLuMSCSJdmWnVMoTcAbBBubJAHQCORQwe4EbPD01T6VXqbOVWQNQpzD6Vvyua3ioG6f+nPaOR8KSl7VVJOW/Lcpc52tlVvHzOpKRVuE1DwrUsMymI5VNKqhUqZbcnVLUSpKQbKy6aJHLePBIVzhjgnDWI5LDuIJZS6rKuJWh2cU6VLDTiUgXSLe+fmIp+oY2wTMy2MES+C0Mv1VSTTnRlHqtkAEix9j2wV2RcG+U6CNRhrEOGqXhKv02q4eE9WZ3/Q542/UezYa3umxur2fevY6RVHAOzbc9WrrTXbXw/AlUb5L6lk8EsS4WpuB8RUTEtXlpNFTeLa2nXShS2lMhJIIBtzF43klR+CNOnZWal62140s4l1BVU1kZkkEXGTXUDSOaVIK9YHhecdk8BmnKcajWbe1vId5LRJW8fM6hxjN8KcaVUVSrV6WfmQ0GbszymxlBURplPNRiEca8UUOv0vDUlRKlLzjNPLjeVpwrLaA22lNyQOSfpEBwnX8PUWj1+Vq9AFSnp1nJKTCrfs6rKHPVOpSrMnX2bbRnxViDD1bp9CYolAFLmZKX8ObdFv2hdk6m3vahRzHX2rcopo4P2VWOsmo7Xtbb59hJTcnZpa95Ff5Q3KVWjLYDc69IaTyGgjVuXW6gCAnW8MUsk2EIlP3o3uEcOrxLVQx7aZNmzky6ndKL7D8SjoPidgYU5KEXKWyIN8kTLhfh1TDLlbfQfFfBZlEka5dlrHn7g/N2jQcSMQiq1YU9hwKk6eSklJ0cdPvnyFso8iecTfG+JEYao6GJPK1OTCPBlW0aBhtIylQ/dGg768jFKJSANI4MLF1pvET8CE9PcXiPB0A/nDthYbGGjRUI940SQiSIadYdbSGGGJjgbwdb67Q3aDygGh1+Qg3+cADTWECSrXaEMRAPPWPVRaxM4eqjFQlD7bZspCvdcQfeSrsR/Q8o81ughik/GE0pKz2ITjdF+OtUzHWHRZw+qTIztOkXXLOgW1HUbKHMHT7Jik6tSZuiz70jON+HMMmygDcEHUKB5gjUHmI2ODcWu4WnyHQtymTBHjtJ3BGy0/iH1GnQi2sSYck8Y0thTT7JeDeeSnUn2FJOuVR3yE37pN/wAQjMjJ4Opkl8D27PX9k4yzrtW/mUKR0gHTePbPU+Zps27KTbK2ZllRSttYsUn/AN8+ceVSbiNRO+wNdCbUSXw4/hV6uzcofXKN+zOyV1+HPuO5vAcJB9gJsvOARcIRb3jGqwNQU4jxHLSzzZck2UqmZkZwi7TYzFOYkBOY2QDcarER1Lr6GXWEPOJl3SlTjQUQlZTfKSOdrm3S5hJffZaeabecQ2+kIdSlRAcSCDZQ5i4BseYEVezlaVnvt2FKUkmSvH9AaoVeCpaWTLSM+yicl2Euh0MhQ9prOCc2RYWi9z7oib4dwTh6svYQCWT64JFucqcoXVWnGV+L+uRrcFBSkKSPskKGyop71l9bLLDjzi2GAoNNqUSlu5uco2Fzr5xmaqM83MS8w3PTKH5ZHhMuJdIU2jUZUm+gso6DqYhOlUcFFS1XMbzNKxtsIUVWKsQ0ymJWG0TLifGcNgG2gMzi7nQWSFH4RvuJOH5Skz8jUKfTv0dS6qz4jUoJgP8Aq7iDlcbzhSr7JXvs4Ig7UxMSucMPONBxCml+GopzIIsUm24I3EORNP8AqiZPxlmUQsupZzewlZABUBsCQACewiThPOpJ6dPXgWJyzalu4Xwzh2q4Yw/LuU+SeqlTlJ9wlXrKZpxxtTob8NaT4KAMib5+h6iIfwzpVKqddnBV2Zd6XYpk3MpEx4paS4hvMlSg17ZAPJOsaCXxBWpanrp0vWag1T1BSTKNzK0tEK3GUG2vPrHkkZ+fpEymZp07MScykFIel3C2sA7i411iCoztNZt9tdt/kVuMrO5ssROypq8wZVqSZlk5QkSSHksn2RcgPe2O9+e2kTzE2A2KVgaWmG5Lw6vTm2ZmffEwlReS/f2PDCiUeCS0kmwuXFX2EVlP1SfqsyZqoTkxNzRABfmHC4sgbe0ddIxCoTxmpqZ9cfMxNpUmYdLhzPBXvBZ3UDzvEpU5vLZ7fUlmkrWH5kxYnDHB1MrrNQnaywl6RUtFPZUZhLPguuaqmLqUnN4SQFZdb5xpFaFR5iE+87MS7cs46tcu0pS0NKUShClWzEDYE2FzzsInUhKUcsXYlUk3HQkNJpIbxjT6RU2L5ai1KTLVyL/rQhY016x58SU9qRr9VlmmVtMMzbzbSVA6IS4oAXO+gEaxyozb01645NPLnMwc9YUslzMLWVm3uLDXtHoqeIaxXS2arVZ2fLV8hmn1ulF97ZibXsPlCyyzJizO92WTScF4amZzBpmZuUQ5PUhUw/Tsr5cmHAJiy84GRPuJ0zD3NtdYbgekylZq70rMyyplRps46y0knMXkSy1oICdSQoA252jQN1GcacYdbnJhLsujwmVhw3bRr7KTyHtK0HU9YxsTT8m+1MSr7rEwyQtt1pRQtChsQRqDEVSmlJZt/wCytJ2dyTVqky9PwnhebMsWp2dM2p1ZzAuoS4lKDY7Ae0Lga69Il1Eo1HqDeCqQcLofNakluzdSbdeS/Lnx3keKDm8MJQlCSQpNiAdRe8VhUavUKzNqm6nPTM7NKABemXVOLIGwuTtGQYirKad+jRV58U2xT6oJhYasTcjJe1r9oU6U5RSvrr17fsDk7GwwvRGsRYkp9NK8jDzl3nb2CGk+0tWu1kg79o2XEKjM0epy0zT5ISNPqTAfblkvB4S6wcq2s4JvYi++yhEPbmX2Euhl5bYdQW15FEZ0HdJ6g22hJfe9XRLeKsyzalLQ0ScqVKtcgbAmwv5CLMks6lfToGd5hFajuTAuVGHBpRF7Wj1SUm7OzLMtLNLemXlZUNti5UYsbSLMrerFSqTNVmoMSMo14kw8qyRewA5qJ5ADUnkIu2VYpmAsPKCnCZVj23nQLLmXTpoOp2SOQ1P2oZh2gSeDqU+488yH1Izzc2fdSka5En7oNu6jbsIqrF+KnsUTwyBTdPYJ8BpW56rV+I/Qadb5kpPGVMkfgW/b6/sb/b15mtrNYmcQVV+oTVgt02S2n3W0DZCewHz1POPGICRYbaw7zEaSSirIjFWEbfGGmxtBJ1gQyQb6cxDT8oJhph2EwiHct4aIRMA0OzQrkQ0Q/lpCGhQb30gDvCgGNWm8SvA+N3MLvGUmwt6kPKupCdVMqP20f1Tz8wDEVMNKbxCpTjUjlktCqUWnmW5fuIMO0/GVOYdS80l0t3lJ9HtJUjklVtVIvfuk37pil6xRpyhzzklPMFqYRra9woHZSSNFJPIiPXhLGk5hR8tlJmaW6rM7LFVrH76D9lX0Ox7XJloeOqKhRV63IAkIdR7D8qs7jW+VXVJulW+u4zlKpg3lnrDr0LITU9OfQoG0ApESrFOCZ/Dai8bTNNUrKicaSQm/JKx9hXY6HkTEYKbecaMJxms0XdEjGUDygWIjJy6wNImFkBJB0PzgZOYg5R5QtU+UAgXB33g5r7i8K4O8K1toBocEg7fKGlA8oANz/WMhVzIzQBozH4ZEAix2jJlze6fhDTmTobwCaGQFW6RlBB5AwDl6GAWVGKBeM3sdDeG5kj7OsFyOXtGZSYIaUeUPCio2SmHXtubn6QXGoJ6jQzcXO3WCChv3Rc9YBUtZ7RIcL4JqOKHPEZAl5BCsrk46DkB5pSN1q7D4kRCc4wWabsh6LZGoplMna3PNyckyp6Yc2SDYAc1E7ADmToIunDeGqfgumvvuvtGYLd5qfc0QhHNKb6hN/io27CPS2xQ8A0VagoS8sTZx5wBT00sa203PRI9lO56xUGLMYzeKngggy9NbVdqWCr6/eWftK+g5d85ynjHlhpDr19f9FKWTfV/Y9ONcau4oe9WlgtqlMqulB0U8r76/6J5edzEVSPlCACYN+UaNOnGnHLDYglreW47YQiLwLwomWAIgWg3gQxCgQt4BhiCN4J31gQoADBvAEEawhoO3lC6QCbwRCGIbwYEKAY0i99I9lGrU/h6dTN06YLTtrKTuhxP3VJ2I8/oY8pgW1gaUlZlcoXL1wnxBpmJAJV0NydSdTkXKPEKamAdwkq0UD9xWvTNHmxHwtk6ipb9FUiQmrnNJPqIZUeiFnVs9lXH4htFILQCLHnE3w1xRq1DDctUAanIJskB1dnmx+FzW47KuOlozp4SpRefDPw9eu0aqtaVPmaKq0Weok4uUqEo9LTKdcjqbXHUHYjuLiNcdI6JouI8P43kRJIVLzyDqadOos6g8ylN7g/ibMR+tcG5KbzO0WfVKO3P7LPXU35B0C48lJ/NBT4hFPJWWVlyV1daopSCDEir2CK5hv2qlTXmWTtMJAWyrycTdP1jRFo2vbQ7GO+M4yV0xdxiy3gZTfSMoQYelonleHcLXMQHUQsl9t49iGCdLRnEp2iDmkTUGzWFBTy+MDUf9Y2vqaoxqlOqYM6F7No11hzSR5QLW2UY9ipW+2kBUsrntDzIWVnlsTpcXghq3vn5Rn8EjYW7xuaJgyuYkN6bTX32r2L9srSfNxVkj5wSnGKvJ2DLYj5JtlSNI9NNpE9WJxMpISr01NK1DbScxA6nkB3OkW5RuDMtLFLldni+u/DosiSlHkXSLn8qfjEhqdfw7gWTVJXYkkjX1CTRmdWeRUL3v3cMcM+IRvkorMxSi95aL1yIphvhUxJLQ9XHG5yY+zIy6iWgei1jVf7qdPxHaNhiviDTcOJ9UYS3NT7SfDRKM2S1LgbBRTokD7idetogWJeJVVrYcl5K9OkFXBS2u7rg/EvTTsmw84hASE6AQoYSdZ58S/D167Spz5Q+Z7qxWp/EM6Zuovl1y2VKdkNp+6lI0A/9m8eIDa0IDWHCNFJJWQowsAQhvBhQyYIXKDygQxDTChGFeAQDChGAYZEdCvDbwYBjoXWBeDeAYodDYMJkkGDDYN4QCtC2gX1g3gGKBlg3tBEAmrmLJZQUklKgbgg6gxOKDxXxFRghqZdRVJVAsETlytI7OD2vncdohdoFohUpQqq01cryWd46HQ2HONmHpmyJlyapDqxZQdHiNK7Z0DUfvJiVf5KYLxsjxkU+mzal6mYpbobc8z4Rtf8AeTHJxSOkPYcXLupdZcW06nULbUUqHxGsZ0+GKLvQm4ssVaa+JX+50rOej1Spok0ytzcsrk3NsJeA/MkpP0jVuejdiVBJlJmlzqeRTMFon4LSP5xWlH4q4xpASljEE242nZEyQ+P74JixKJ6SWJ5LKJmTpU0BuS0ton+FVvpHLOnxGn8MlLv9I6IVYPk0OHo+40ZOtCecHVlxtwf3VR7GOA+LDbPh+fB/3Bib0b0qykIE1hllXUszhH0UgxPKV6VVFIHj0CaQfwzSD/6RHDUxPEF8VP6nSpy/jFP13lIr4C4s+zh+oH/gGMaPR9xm8daG80nq8ttsf3lCL4qfpW0VIPg0KZX+9MoH/pMQatelkVhQk8NMju9OE/RKBCjiMe/gh9R55/yil67yEtejjiIn9pepkoOed8uKHwQk/wA42Mt6PVLl1J/SVamZlXNuTZS0D+ZRUfpEerfpLYonswlpelSY6oZU4fmtRH0iu6zxXxbV86ZivzobVu3LqDKfkgCOuFLiNT4pKPcVTrR6F8rwlgfA6A+9J06WWnUP1R0OL+AcNv4UxFcR8bKBKAtyAmao6jRJbT4TI8lKF7eSY57fmlvuKcWpS3FbrWcyj8TrGAqKjHXDhak81ebkc0qsv4qxNa/xUxDWs7bTyKdLq0ySd0rI6Fw+18rDtEIJzEndRNyTuYXeDGnTpQpq0FYqy3d2NtCg+UNvFg7DraQoadoUAXDuNYQhsKABxhsImBDFcULeFAO8MiKBBgGEJiAtBhWhQwFCEIwoADBvDbwQYRJMMHlAJhXgGG0EQ28G8IYbwrwN4MABvAPSCDaBAMUG0KFeAAjSMqHCnnGKDA1caNgzNqb2MexFScSPeMaULtDvEip00ycZtG4XVHCLZjHjcm1K57x488AqvAqaQ3JsyKcJ5xhUecEGAYsSIMBgE2g7w0mGLYMAnSET0gbwCFuIB0tBEAwCYuUKFvAO0AgwIXKBeGFwwIXKBARFAMGAYYmwQYEKAif/2Q==';
const HOTELS=[{"id":"e8827d5c0f","name":"فندق هيلتون أجنحة","englishName":"Hilton Suites","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-10-01","roomType":"دبل سيتي","price":"875/785","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-10-01","roomType":"دبل حرم","price":"975/885","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-10-01","roomType":"غرفة وصالة سيتي","price":"1120/1030","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-10-01","roomType":"غرفة وصالة حرم","price":"1165/1075","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-10-01","roomType":"غرفتين وصالة سيتي","price":"1845/1755","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-10-01","roomType":"غرفتين وصالة حرم","price":"2035/1945","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"5003f8986f","name":"فندق ميلينيوم النسيم","englishName":"Millennium Al Naseem","mealPlan":"روم أونلي","rates":[{"from":"2026-07-01","to":"2026-09-23","roomType":"روم أونلي","price":"170/150","weekdayPrice":"","weekendPrice":"","extraBed":"25"},{"from":"2026-09-23","to":"2026-09-27","roomType":"روم أونلي","price":"235/185","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-27","to":"2026-12-10","roomType":"روم أونلي","price":"170/150","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"176a334512","name":"فندق هيلتون مؤتمرات","englishName":"Hilton Convention","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-01","roomType":"غرفة ثنائية","price":"715/670","weekdayPrice":"","weekendPrice":"","extraBed":"90"}]},{"id":"5e1c73a331","name":"فندق دبل تري","englishName":"DoubleTree","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-01","roomType":"غرفة ثنائية","price":"615/570","weekdayPrice":"","weekendPrice":"","extraBed":"90"}]},{"id":"bf95062d66","name":"فندق كونراد مكة","englishName":"Conrad Makkah","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-09-01","roomType":"دبل سيتي","price":"910/810","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-09-01","roomType":"دبل حرم","price":"1010/910","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-09-01","roomType":"التنفيذية سيتي","price":"1155/1055","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-09-01","roomType":"التنفيذية حرم","price":"1225/1125","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-01","to":"2026-09-01","roomType":"جناح ديلوكس حرم","price":"1455/1355","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-01","to":"2026-10-01","roomType":"دبل سيتي","price":"960/860","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-01","to":"2026-10-01","roomType":"دبل حرم","price":"1060/960","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-01","to":"2026-10-01","roomType":"التنفيذية سيتي","price":"1205/1105","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-01","to":"2026-10-01","roomType":"التنفيذية حرم","price":"1275/1175","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-01","to":"2026-10-01","roomType":"جناح ديلوكس حرم","price":"1505/1405","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"3cb11f1f5c","name":"فندق روتانا جبل عمر","englishName":"Jabal Omar Rotana","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-31","roomType":"الدبل","price":"710/660","weekdayPrice":"","weekendPrice":"","extraBed":"160"}]},{"id":"212246a43a","name":"فندق سويس المقام","englishName":"Swissôtel Al Maqam","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-01","roomType":"غرفة ثنائية","price":"820","weekdayPrice":"","weekendPrice":"","extraBed":"120"}]},{"id":"dc192ecc49","name":"فندق الفيرمونت","englishName":"Fairmont Makkah","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-01","roomType":"غرفة ثنائية","price":"775","weekdayPrice":"","weekendPrice":"","extraBed":"150"}]},{"id":"4a3949c76a","name":"فندق دار التوحيد","englishName":"Dar Al Tawhid","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-01","to":"2026-08-01","roomType":"غرفة ثنائية","price":"1670/1570","weekdayPrice":"","weekendPrice":"","extraBed":"300"},{"from":"2026-08-01","to":"2026-09-30","roomType":"غرفة ثنائية","price":"1770/1620","weekdayPrice":"","weekendPrice":"","extraBed":"300"}]},{"id":"6c92b18092","name":"فندق المروة ريحانة","englishName":"Al Marwa Rayhaan","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-10-08","roomType":"غرفة ثنائية","price":"950/890","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-10-08","to":"2026-11-26","roomType":"غرفة ثنائية","price":"1000/1100","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-11-26","to":"2026-12-17","roomType":"غرفة ثنائية","price":"1070/1020","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"84fed0eabe","name":"فندق موفنبيك هاجر","englishName":"Mövenpick Hajar Tower","mealPlan":"شامل الإفطار","rates":[{"from":"2026-06-16","to":"2026-07-16","roomType":"غرفة ثنائية","price":"890/790","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-07-16","to":"2026-09-22","roomType":"غرفة ثنائية","price":"950/850","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-09-22","to":"2026-12-20","roomType":"غرفة ثنائية","price":"1100/1000","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"9eec8fe656","name":"فندق إيلاف كنده","englishName":"Elaf Kinda","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-08-14","roomType":"غرفة ثنائية","price":"970/870","weekdayPrice":"","weekendPrice":"","extraBed":"125"},{"from":"2026-08-14","to":"2026-12-21","roomType":"غرفة ثنائية","price":"1120/1020","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"74e838b8f7","name":"فندق أنجم مكة","englishName":"Anjum Makkah","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة ثنائية","price":"520/470","weekdayPrice":"","weekendPrice":"","extraBed":"100"},{"from":"2026-08-01","to":"2026-09-19","roomType":"غرفة ثنائية","price":"585/535","weekdayPrice":"","weekendPrice":"","extraBed":"100"}]},{"id":"fe1019d974","name":"فندق الصفوة (البرج الثالث)","englishName":"Al Safwah Tower 3","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة ثنائية","price":"720/670","weekdayPrice":"","weekendPrice":"","extraBed":"120"}]},{"id":"2472ae9b65","name":"فندق زمزم مكة","englishName":"Zamzam Makkah","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-10-01","roomType":"غرفة ثنائية","price":"870/770","weekdayPrice":"","weekendPrice":"","extraBed":"125"}]},{"id":"ee709a7cd6","name":"فندق الشهداء","englishName":"Al Shohada Hotel","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-07-14","roomType":"غرفة ثنائية","price":"410","weekdayPrice":"","weekendPrice":"","extraBed":"75"},{"from":"2026-07-14","to":"2026-09-11","roomType":"غرفة ثنائية","price":"450","weekdayPrice":"","weekendPrice":"","extraBed":"90"},{"from":"2026-07-14","to":"2026-09-11","roomType":"غرفة ثنائية","price":"590","weekdayPrice":"","weekendPrice":"","extraBed":"90"}]},{"id":"0c5bcfe22d","name":"فندق إعمار جراند","englishName":"Emaar Grand","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة ثنائية","price":"295","weekdayPrice":"","weekendPrice":"","extraBed":"40"},{"from":"2026-07-15","to":"2026-09-12","roomType":"غرفة ثنائية","price":"425","weekdayPrice":"","weekendPrice":"","extraBed":"40"},{"from":"2026-09-12","to":"2026-12-10","roomType":"غرفة ثنائية","price":"485","weekdayPrice":"","weekendPrice":"","extraBed":"40"}]},{"id":"15374662a3","name":"فندق إعمار المنار","englishName":"Emaar Al Manar","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة ثنائية","price":"285","weekdayPrice":"","weekendPrice":"","extraBed":"40"},{"from":"2026-07-15","to":"2026-09-12","roomType":"غرفة ثنائية","price":"385","weekdayPrice":"","weekendPrice":"","extraBed":"40"},{"from":"2026-09-12","to":"2026-12-10","roomType":"غرفة ثنائية","price":"500","weekdayPrice":"","weekendPrice":"","extraBed":"40"}]},{"id":"2a211e85c0","name":"فندق سجي مكة","englishName":"Saja Makkah","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-08-14","roomType":"غرفة ثنائية","price":"230","weekdayPrice":"","weekendPrice":"","extraBed":"35"},{"from":"2026-08-14","to":"2026-12-30","roomType":"غرفة ثنائية","price":"260","weekdayPrice":"","weekendPrice":"","extraBed":"35"}]},{"id":"5ebd323c19","name":"فندق فوكو مكة","englishName":"Voco Makkah","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-07-31","roomType":"غرفة رباعي روم أونلي","price":"185/175","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-01","to":"2026-09-19","roomType":"غرفة رباعي روم أونلي","price":"190","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"40df5ddafb","name":"فندق ميسان المشاعر","englishName":"Maysan Al Mashaer","mealPlan":"شامل الإفطار","rates":[{"from":"2026-07-09","to":"2026-07-16","roomType":"غرفة ثنائية","price":"420","weekdayPrice":"","weekendPrice":"","extraBed":"25"},{"from":"2026-07-16","to":"2026-07-30","roomType":"غرفة ثنائية","price":"450","weekdayPrice":"","weekendPrice":"","extraBed":"25"},{"from":"2026-07-30","to":"2026-09-05","roomType":"غرفة ثنائية","price":"490","weekdayPrice":"","weekendPrice":"","extraBed":"25"},{"from":"2026-09-05","to":"2026-09-12","roomType":"غرفة ثنائية","price":"430","weekdayPrice":"","weekendPrice":"","extraBed":"25"}]},{"id":"d4767e209e","name":"فندق منازل العين","englishName":"Manazil Al Ain","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-08-19","roomType":"غرفة ثنائية","price":"90","weekdayPrice":"","weekendPrice":"","extraBed":"15"},{"from":"2026-08-19","to":"2026-10-16","roomType":"غرفة ثنائية","price":"110","weekdayPrice":"","weekendPrice":"","extraBed":"15"}]},{"id":"0e22dcf68a","name":"فندق الماسة جراند","englishName":"Al Masa Grand","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"330","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-13","roomType":"غرفة فلات روم أونلي","price":"370","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-13","to":"2026-09-12","roomType":"غرفة فلات روم أونلي","price":"390","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"75022d6575","name":"فندق رمادا","englishName":"Ramada","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"290","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-13","roomType":"غرفة فلات روم أونلي","price":"330","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-13","to":"2026-09-12","roomType":"غرفة فلات روم أونلي","price":"350","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"a786536083","name":"فندق بدر الماسة","englishName":"Badr Al Masa","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-08-12","roomType":"غرفة فلات روم أونلي","price":"195","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-12","to":"2026-09-12","roomType":"غرفة فلات روم أونلي","price":"215","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"027da0ac7e","name":"فندق أبراج نوازي","englishName":"Nawazi Towers","mealPlan":"روم أونلي","rates":[{"from":"2026-07-01","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"100","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-15","roomType":"غرفة فلات روم أونلي","price":"115","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-15","to":"2026-09-01","roomType":"غرفة فلات روم أونلي","price":"140","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"883142a65e","name":"فندق النخبة 1","englishName":"Al Nokhba 1","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"90","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-14","roomType":"غرفة فلات روم أونلي","price":"100","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-14","to":"2026-10-12","roomType":"غرفة فلات روم أونلي","price":"110","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-10-12","to":"2026-12-10","roomType":"غرفة فلات روم أونلي","price":"130","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"215d01ae91","name":"فندق شرفة الطلائع","englishName":"Shorfa Al Talaa","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"85","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-14","roomType":"غرفة فلات روم أونلي","price":"95","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-14","to":"2026-10-12","roomType":"غرفة فلات روم أونلي","price":"105","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-10-12","to":"2026-12-10","roomType":"غرفة فلات روم أونلي","price":"120","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"48d6522194","name":"فندق سرايا الجوار","englishName":"Saraya Al Jiwar","mealPlan":"روم أونلي","rates":[{"from":"2026-07-06","to":"2026-07-15","roomType":"غرفة فلات روم أونلي","price":"75","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-07-15","to":"2026-08-14","roomType":"غرفة فلات روم أونلي","price":"85","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-08-14","to":"2026-10-12","roomType":"غرفة فلات روم أونلي","price":"95","weekdayPrice":"","weekendPrice":"","extraBed":""},{"from":"2026-10-12","to":"2026-12-10","roomType":"غرفة فلات روم أونلي","price":"105","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"52fd405d6f","name":"فندق أبراج الوحدة","englishName":"Abraj Al Wehda","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة فلات","price":"60","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"15a2d8f16f","name":"فندق الكسوة","englishName":"Al Kiswah","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة فلات","price":"85","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"7a70e1a4b1","name":"فندق التيسير","englishName":"Al Taysir","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة فلات","price":"80","weekdayPrice":"","weekendPrice":"","extraBed":""}]},{"id":"4269932174","name":"فندق هوليداي إن","englishName":"Holiday Inn","mealPlan":"بدون وجبات","rates":[{"from":"2026-07-06","to":"2026-08-01","roomType":"غرفة فلات","price":"115","weekdayPrice":"","weekendPrice":"","extraBed":""}]}];
const STORAGE_KEY='yanabea_individual_quote_lite_v1';
const PHONE_DEFAULT=['+966555509419','+966568666399','+966549781111','+966546777511'];
const MAX_OFFERS=8;
const AUTH_HASH='db031c72ba245b0d6de8febc3797849ada2e764fbd783251f21cd823da263883';

const uid=()=>Math.random().toString(36).slice(2,11)+Date.now().toString(36).slice(-4);
const today=()=>new Date().toISOString().slice(0,10);
const tomorrow=()=>{const d=new Date();d.setDate(d.getDate()+1);return d.toISOString().slice(0,10)};
const clone=v=>JSON.parse(JSON.stringify(v));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=v=>{
  const n=Number(String(v??'').replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٬,\s]/g,'').replace('٫','.'));
  return Number.isFinite(n)?n:0;
};
const money=v=>new Intl.NumberFormat('en-US',{maximumFractionDigits:2}).format(num(v));
const dateLabel=v=>{if(!v)return'—';const p=String(v).split('-');return p.length===3?`${p[2]}/${p[1]}/${p[0]}`:v};
const nightsText=n=>Number(n)===1?'1 ليلة':`${Number(n)||0} ليالٍ`;

function defaultOffer(){
  return {id:uid(),hotelMode:'list',hotelId:'',hotelName:'',checkIn:today(),checkOut:tomorrow(),roomType:'',mealPlan:'',view:'',pricingMode:'nightly',nightlyPrice:'',weekdayPrice:'',weekendPrice:'',totalPrice:'',extraBed:'',notes:''};
}
function defaultData(){
  return {
    draft:{customerName:'',quoteDate:today(),intro:'نسعد بإبلاغك بتفاصيل الحجز كالتالي:',currency:'ريال سعودي',notes:'الأسعار قابلة للتغيير حسب الإمكانية وقت التأكيد.',closing:'يسعدنا خدمتك، ولتأكيد الحجز يرجى التواصل معنا وإرسال بيانات النزلاء.',items:[defaultOffer()]},
    library:[],
    settings:{companyName:'ينابيع الهدى المتميزة',companyLine:'سكن مطمئن لرحلة مباركة',phones:PHONE_DEFAULT.join('، '),logo:ORIGINAL_LOGO},
    activeId:''
  };
}

let app=load();

function normalize(){
  const d=defaultData();
  app=app&&typeof app==='object'?app:d;
  app.draft=Object.assign(d.draft,app.draft||{});
  app.library=Array.isArray(app.library)?app.library.slice(0,250):[];
  app.settings=Object.assign(d.settings,app.settings||{});app.settings.logo=ORIGINAL_LOGO;
  if(!app.settings.companyLine||app.settings.companyLine==='خدمات الفنادق والحجوزات')app.settings.companyLine='سكن مطمئن لرحلة مباركة';
  app.settings.phones=normalizePhones(app.settings.phones||PHONE_DEFAULT.join('، '));
  app.draft.items=Array.isArray(app.draft.items)&&app.draft.items.length?app.draft.items.slice(0,MAX_OFFERS):[defaultOffer()];
  app.draft.items=app.draft.items.map(x=>{
    const o=Object.assign(defaultOffer(),x||{}),known=findHotel(o.hotelName,o.hotelId);
    if(!['list','custom'].includes(o.hotelMode))o.hotelMode=known?'list':(o.hotelName?'custom':'list');
    if(o.hotelMode==='list'&&known){o.hotelId=known.id;o.hotelName=known.name}
    return o;
  });
}

function load(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY))||defaultData()}catch(e){return defaultData()}}
function persist(){normalize();localStorage.setItem(STORAGE_KEY,JSON.stringify(app))}

let saveTimer;
function autoSave(){clearTimeout(saveTimer);saveTimer=setTimeout(()=>{persist();renderPreview();renderGrandStat()},120)}

function toast(msg){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>t.classList.remove('show'),2100);
}

function findHotel(name,id=''){
  const key=String(name||'').trim().toLowerCase();
  return HOTELS.find(h=>h.id===id)||HOTELS.find(h=>String(h.name).trim().toLowerCase()===key||String(h.englishName).trim().toLowerCase()===key);
}

function matchingRate(offer){
  const h=findHotel(offer.hotelName,offer.hotelId);
  if(!h)return null;
  const room=String(offer.roomType||'').trim().toLowerCase();
  let candidates=(h.rates||[]).filter(r=>String(r.roomType||'').trim().toLowerCase()===room);
  if(!candidates.length)candidates=h.rates||[];
  const date=offer.checkIn||today();
  const exact=candidates.find((r,i)=>(!r.from||date>=r.from)&&(!r.to||date<r.to||(i===candidates.length-1&&date<=r.to)));
  if(exact)return exact;
  return candidates.slice().sort((a,b)=>Math.abs(new Date(date)-new Date(a.from||date))-Math.abs(new Date(date)-new Date(b.from||date)))[0]||null;
}

function ratePrices(rate){
  if(!rate)return{weekday:'',weekend:''};
  let weekday=String(rate.weekdayPrice||'').trim(),weekend=String(rate.weekendPrice||'').trim();
  if(!weekday&&!weekend){
    const p=String(rate.price||'').split(/[\/|\\]+/).map(x=>x.trim()).filter(Boolean);
    if(p.length===1)weekday=weekend=p[0];
    else if(p.length>1){
      const a=num(p[0]),b=num(p[1]);
      weekday=a&&b?(a<=b?p[0]:p[1]):p[0];
      weekend=a&&b?(a<=b?p[1]:p[0]):p[1];
    }
  }
  return{weekday,weekend:weekend||weekday};
}

function inferView(room){
  const t=String(room||'');
  if(/كعبة|kaaba/i.test(t))return'إطلالة الكعبة';
  if(/حرم|haram/i.test(t))return'إطلالة الحرم';
  if(/سيتي|مدينة|city/i.test(t))return'إطلالة المدينة';
  if(/جزئية|partial/i.test(t))return'إطلالة جزئية';
  if(/بدون|no view/i.test(t))return'بدون إطلالة';
  return'';
}

function applyHotel(offer,hotelId=''){
  const h=findHotel(offer.hotelName,hotelId||offer.hotelId);
  if(!h)return false;
  offer.hotelMode='list';
  offer.hotelId=h.id;
  offer.hotelName=h.name;
  offer.mealPlan=h.mealPlan||offer.mealPlan;
  const r=(h.rates||[])[0];
  if(r)offer.roomType=r.roomType||offer.roomType;
  applyRate(offer);
  return true;
}

function applyRate(offer){
  const r=matchingRate(offer),p=ratePrices(r);
  if(!r)return false;
  offer.weekdayPrice=p.weekday||'';
  offer.weekendPrice=p.weekend||p.weekday||'';
  offer.nightlyPrice=p.weekday||p.weekend||'';
  offer.extraBed=String(r.extraBed??'');
  offer.view=inferView(offer.roomType)||offer.view;

  // Auto-set pricingMode if hotel rates specify weekday vs weekend rates
  if(p.weekday && p.weekend && num(p.weekday) !== num(p.weekend)){
    offer.pricingMode='weekdayWeekend';
  } else if(p.weekday && (!p.weekend || num(p.weekday) === num(p.weekend))){
    offer.pricingMode='nightly';
  }
  return true;
}

function stats(o){
  const start=new Date(`${o.checkIn}T12:00:00`),end=new Date(`${o.checkOut}T12:00:00`);
  if(!o.checkIn||!o.checkOut||isNaN(start)||isNaN(end)||end<=start)return{nights:0,weekday:0,weekend:0,total:0};
  let nights=0,weekday=0,weekend=0;
  for(let d=new Date(start);d<end;d.setDate(d.getDate()+1)){
    nights++;
    const day=d.getDay();
    if(day===5||day===6)weekend++;
    else weekday++;
  }
  let total=o.pricingMode==='weekdayWeekend'?weekday*num(o.weekdayPrice)+weekend*num(o.weekendPrice):o.pricingMode==='total'?num(o.totalPrice):nights*num(o.nightlyPrice);
  return{nights,weekday,weekend,total};
}

function grandTotal(){return app.draft.items.reduce((s,o)=>s+stats(o).total,0)}

function pricingHtml(o){
  if(o.pricingMode==='weekdayWeekend')return`<div class="field"><label>سعر WEEKDAY</label><input inputmode="decimal" data-key="weekdayPrice" value="${esc(o.weekdayPrice)}"></div><div class="field"><label>سعر WEEKEND</label><input inputmode="decimal" data-key="weekendPrice" value="${esc(o.weekendPrice)}"></div>`;
  if(o.pricingMode==='total')return`<div class="field"><label>السعر الكامل للمدة</label><input inputmode="decimal" data-key="totalPrice" value="${esc(o.totalPrice)}"></div><div></div>`;
  return`<div class="field"><label>سعر الليلة</label><input inputmode="decimal" data-key="nightlyPrice" value="${esc(o.nightlyPrice)}"></div><div></div>`;
}

function hotelOptions(selectedId=''){
  return`<option value="">اختر الفندق من القائمة</option>${HOTELS.map(h=>`<option value="${esc(h.id)}" ${h.id===selectedId?'selected':''}>${esc(h.name)}${h.englishName?` — ${esc(h.englishName)}`:''}</option>`).join('')}`;
}

function hotelFieldsHtml(o){
  if(o.hotelMode==='custom')return`<div class="field"><label>اسم الفندق الجديد</label><input data-hotel-custom value="${esc(o.hotelName)}" placeholder="اكتب اسم الفندق" autocomplete="off"></div>`;
  return`<div class="field"><label>الفندق من القائمة</label><select data-hotel-select>${hotelOptions(o.hotelId)}</select></div>`;
}

function offerHtml(o,i){
  const s=stats(o);
  return`<article class="offer-card" data-id="${o.id}">
    <div class="offer-title">
      <strong>الخيار ${i+1}</strong>
      <button class="btn danger small" data-remove="${o.id}">حذف</button>
    </div>
    <div class="grid three">
      <div class="field">
        <label>طريقة اختيار الفندق</label>
        <select data-hotel-mode>
          <option value="list" ${o.hotelMode==='list'?'selected':''}>اختيار من القائمة</option>
          <option value="custom" ${o.hotelMode==='custom'?'selected':''}>إضافة فندق جديد</option>
        </select>
      </div>
      ${hotelFieldsHtml(o)}
      <div class="field"><label>تاريخ الدخول</label><input type="date" data-key="checkIn" value="${esc(o.checkIn)}"></div>
      <div class="field"><label>تاريخ الخروج</label><input type="date" data-key="checkOut" value="${esc(o.checkOut)}"></div>
      <div class="field"><label>نوع الغرفة</label><input data-room-type-input list="roomTypes_${o.id}" data-key="roomType" value="${esc(o.roomType)}"></div>
      <div class="field"><label>نوع الوجبة</label><input list="mealPlans" data-key="mealPlan" value="${esc(o.mealPlan)}"></div>
      <div class="field"><label>الإطلالة</label><input list="views" data-key="view" value="${esc(o.view)}"></div>
      <div class="field">
        <label>طريقة التسعير</label>
        <select data-key="pricingMode">
          <option value="nightly" ${o.pricingMode==='nightly'?'selected':''}>سعر واحد لكل ليلة</option>
          <option value="weekdayWeekend" ${o.pricingMode==='weekdayWeekend'?'selected':''}>WEEKDAY / WEEKEND</option>
          <option value="total" ${o.pricingMode==='total'?'selected':''}>سعر كامل للمدة</option>
        </select>
      </div>
      <div class="field"><label>ملاحظات الخيار</label><input data-key="notes" value="${esc(o.notes)}"></div>
      <div class="field"><label>سعر السرير الإضافي</label><input inputmode="decimal" data-key="extraBed" value="${esc(o.extraBed)}"></div>
      <div class="pricing-fields">${pricingHtml(o)}</div>
    </div>
    <div class="summary"><span>${nightsText(s.nights)}</span><span>WEEKDAY: ${s.weekday}</span><span>WEEKEND: ${s.weekend}</span></div>
    <div class="option-total"><span>إجمالي هذا الخيار</span><b>${money(s.total)} ${esc(app.draft.currency)}</b></div>
  </article>`;
}

function updateRoomTypesList(card, o){
  const h=findHotel(o.hotelName, o.hotelId);
  let rooms=[];
  if(h && h.rates){
    rooms=[...new Set(h.rates.map(r=>r.roomType).filter(Boolean))];
  }
  if(!rooms.length){
    rooms=[...new Set(HOTELS.flatMap(h=>(h.rates||[]).map(r=>r.roomType)).filter(Boolean))];
  }
  const listId=`roomTypes_${o.id}`;
  let listEl=document.getElementById(listId);
  if(!listEl){
    listEl=document.createElement('datalist');
    listEl.id=listId;
    document.body.appendChild(listEl);
  }
  listEl.innerHTML=rooms.map(v=>`<option value="${esc(v)}"></option>`).join('');
}

function renderOffers(){
  const wrap=document.getElementById('offers');
  if(!wrap)return;
  wrap.innerHTML=app.draft.items.map(offerHtml).join('');
  wrap.querySelectorAll('[data-id]').forEach(card=>{
    const o=app.draft.items.find(x=>x.id===card.dataset.id);
    if(!o)return;
    updateRoomTypesList(card, o);

    const refresh=()=>{persist();renderOffers();renderPreview();renderGrandStat()};
    
    const mode=card.querySelector('[data-hotel-mode]');
    if(mode)mode.addEventListener('change',()=>{
      o.hotelMode=mode.value;
      o.hotelId='';
      o.hotelName='';
      if(o.hotelMode==='custom'){
        o.roomType='';o.mealPlan='';o.view='';o.nightlyPrice='';o.weekdayPrice='';o.weekendPrice='';o.extraBed='';
      }
      refresh();
    });

    const hotelSelect=card.querySelector('[data-hotel-select]');
    if(hotelSelect)hotelSelect.addEventListener('change',()=>{
      const selected=hotelSelect.value;
      o.hotelId=selected;
      o.hotelName='';
      if(selected&&applyHotel(o,selected))toast('تم اختيار الفندق وتحديث بياناته');
      refresh();
    });

    const customHotel=card.querySelector('[data-hotel-custom]');
    if(customHotel){
      customHotel.addEventListener('input',()=>{o.hotelMode='custom';o.hotelId='';o.hotelName=customHotel.value;autoSave()});
      customHotel.addEventListener('change',()=>{o.hotelName=customHotel.value.trim();persist();renderPreview()});
    }

    card.querySelectorAll('[data-key]').forEach(el=>{
      const key=el.dataset.key;
      el.addEventListener('input',()=>{
        o[key]=el.value;
        if(key==='checkIn'||key==='checkOut'){
          if(key==='checkIn'&&o.checkOut&&o.checkOut<=o.checkIn){
            const d=new Date(`${o.checkIn}T12:00:00`);
            d.setDate(d.getDate()+1);
            o.checkOut=d.toISOString().slice(0,10);
          }
          applyRate(o);
          persist();
          renderPreview();
          renderGrandStat();
        } else autoSave();
      });
      el.addEventListener('change',()=>{
        o[key]=el.value;
        if(key==='checkIn'&&o.checkOut&&o.checkOut<=o.checkIn){
          const d=new Date(`${o.checkIn}T12:00:00`);
          d.setDate(d.getDate()+1);
          o.checkOut=d.toISOString().slice(0,10);
        }
        if(['roomType','checkIn','checkOut'].includes(key))applyRate(o);
        refresh();
      });
    });
  });

  wrap.querySelectorAll('[data-remove]').forEach(btn=>btn.onclick=()=>{
    if(app.draft.items.length===1){toast('يجب وجود خيار واحد على الأقل');return}
    app.draft.items=app.draft.items.filter(x=>x.id!==btn.dataset.remove);
    persist();
    renderAll();
  });
}

function renderGrandStat(){
  const el=document.getElementById('grandStat');
  if(el)el.textContent=`الإجمالي: ${money(grandTotal())} ${app.draft.currency}`;
}

function previewPrice(o,s){
  if(o.pricingMode==='weekdayWeekend')return`وسط الأسبوع: ${money(o.weekdayPrice)} × ${s.weekday} · نهاية الأسبوع: ${money(o.weekendPrice)} × ${s.weekend}`;
  if(o.pricingMode==='total')return`السعر الكامل للمدة: ${money(o.totalPrice)} ${esc(app.draft.currency)}`;
  return`سعر الليلة: ${money(o.nightlyPrice)} ${esc(app.draft.currency)}`;
}

function renderPreview(){
  const q=app.draft,sets=app.settings,perPage=3,chunks=[];
  for(let i=0;i<q.items.length;i+=perPage)chunks.push(q.items.slice(i,i+perPage));
  if(!chunks.length)chunks.push([]);
  const totalPages=chunks.length;
  const pages=chunks.map((chunk,pageIndex)=>{
    const items=chunk.map((o,i)=>{
      const st=stats(o),globalIndex=pageIndex*perPage+i;
      const extraBedStr = num(o.extraBed) > 0 ? `<br><small>السرير الإضافي: ${money(o.extraBed)} ${esc(q.currency)}</small>` : '';
      const notesStr = o.notes ? `<br><small>${esc(o.notes)}</small>` : '';
      return`<section class="preview-offer">
        <div class="preview-offer-head"><span>الخيار ${globalIndex+1}</span><span>${nightsText(st.nights)}</span></div>
        <div class="preview-offer-body">
          <div class="hotel-name">${esc(o.hotelName||'اسم الفندق')}</div>
          <div class="detail-grid">
            <div class="detail"><b>الدخول</b><span>${dateLabel(o.checkIn)}</span></div>
            <div class="detail"><b>الخروج</b><span>${dateLabel(o.checkOut)}</span></div>
            <div class="detail"><b>الغرفة</b><span>${esc(o.roomType||'—')}</span></div>
            <div class="detail"><b>الوجبة</b><span>${esc(o.mealPlan||'—')}</span></div>
            <div class="detail"><b>الإطلالة</b><span>${esc(o.view||'—')}</span></div>
            <div class="detail"><b>توزيع الليالي</b><span>${st.weekday} وسط الأسبوع · ${st.weekend} ويك إند</span></div>
          </div>
          <div class="price-line">
            <span>${previewPrice(o,st)}${extraBedStr}${notesStr}</span>
            <b>${money(st.total)} ${esc(q.currency)}</b>
          </div>
        </div>
      </section>`;
    }).join('');

    const finalBlock=pageIndex===totalPages-1?`<div class="grand-total"><span>الإجمالي النهائي لجميع الخيارات</span><b>${money(grandTotal())} ${esc(q.currency)}</b></div><div class="closing"><b>${esc(q.notes)}</b><br>${esc(q.closing)}</div>`:'';
    return`<article class="quote-page">
      <header class="quote-header">
        <img src="${ORIGINAL_LOGO}" alt="شعار الشركة" onerror="this.onerror=null;this.src=ORIGINAL_LOGO">
        <div class="quote-title"><h1>عرض سعر للعميل</h1><p>تفاصيل الإقامة والحجز المقترح</p></div>
        <div class="quote-date"><b>التاريخ</b><br>${dateLabel(q.quoteDate)}</div>
      </header>
      <main class="quote-body">
        <div class="greeting">عزيزي العميل / <b>${esc(q.customerName||'اسم العميل')}</b><br>${esc(q.intro)}</div>
        ${items}
        ${finalBlock}
      </main>
      ${totalPages>1?`<div style="position:absolute;bottom:82px;left:28px;color:#8a6f77;font-size:11px">${pageIndex+1} / ${totalPages}</div>`:''}
      <footer class="quote-footer">
        <div class="phones" dir="ltr">${phoneList().map(p=>`<span class="phone-number" dir="ltr">${esc(p)}</span>`).join('')}</div>
        <div class="company-line">${esc(sets.companyName)} · ${esc(sets.companyLine)}</div>
      </footer>
    </article>`;
  }).join('');

  const pagesContainer = document.getElementById('quotePages');
  if(pagesContainer) pagesContainer.innerHTML=pages;
  
  const logoEl = document.getElementById('brandLogo');
  if(logoEl) logoEl.src=sets.logo||ORIGINAL_LOGO;
  
  const titleEl = document.getElementById('appTitle');
  if(titleEl) titleEl.textContent=`${sets.companyName} | عرض سعر للأفراد`;

  updatePreviewScale();
}

function updatePreviewScale(){
  const stage = document.querySelector('.preview-stage');
  if(!stage) return;
  const stageWidth = stage.clientWidth - 28;
  if(window.innerWidth <= 1050 && stageWidth > 0){
    const scale = Math.min(1, Math.max(0.3, stageWidth / 794));
    document.documentElement.style.setProperty('--preview-scale', scale.toFixed(3));
  } else {
    document.documentElement.style.setProperty('--preview-scale', '1');
  }
}
window.addEventListener('resize', updatePreviewScale);

function normalizePhone(value){let p=String(value||'').trim().replace(/\s+/g,'');if(p.endsWith('+')&&!p.startsWith('+'))p='+'+p.slice(0,-1);return p}
function normalizePhones(value){return String(value||'').split(/[،,|]+/).map(normalizePhone).filter(Boolean).join('، ')}
function phoneList(){return normalizePhones(app.settings.phones||'').split('،').map(x=>x.trim()).filter(Boolean)}

function bindRoot(){
  [['customerName','customerName'],['quoteDate','quoteDate'],['currency','currency'],['intro','intro'],['notes','notes'],['closing','closing']].forEach(([id,key])=>{
    const el=document.getElementById(id);
    if(!el)return;
    el.value=app.draft[key]||'';
    el.oninput=()=>{app.draft[key]=el.value;autoSave()};
  });
}

function saveCurrent(){
  const title=[app.draft.customerName||'عرض عميل',app.draft.items[0]?.hotelName||'',dateLabel(app.draft.quoteDate)].filter(Boolean).join(' - ');
  const now=new Date().toISOString();
  if(app.activeId){
    const x=app.library.find(x=>x.id===app.activeId);
    if(x){x.title=title;x.data=clone(app.draft);x.updatedAt=now}
    else app.activeId='';
  }
  if(!app.activeId){
    const item={id:uid(),title,data:clone(app.draft),createdAt:now,updatedAt:now};
    app.library.unshift(item);
    app.activeId=item.id;
  }
  app.library=app.library.slice(0,250);
  persist();
  renderSaved();
  toast('تم حفظ عرض السعر');
}

function loadSaved(id){
  const x=app.library.find(x=>x.id===id);
  if(!x)return;
  app.draft=clone(x.data);
  app.activeId=x.id;
  persist();
  renderAll();
  scrollTo({top:0,behavior:'smooth'});
  toast('تم فتح العرض');
}

function deleteSaved(id){
  const x=app.library.find(x=>x.id===id);
  if(!x)return;
  if(!confirm(`حذف ${x.title}؟`))return;
  app.library=app.library.filter(x=>x.id!==id);
  if(app.activeId===id)app.activeId='';
  persist();
  renderSaved();
  toast('تم الحذف');
}

function duplicateSaved(id){
  const x=app.library.find(x=>x.id===id);
  if(!x)return;
  const now=new Date().toISOString();
  app.library.unshift({...clone(x),id:uid(),title:`${x.title} - نسخة`,createdAt:now,updatedAt:now});
  persist();
  renderSaved();
  toast('تم إنشاء نسخة');
}

function renderSaved(){
  const wrap=document.getElementById('savedList');
  if(!wrap)return;
  if(!app.library.length){wrap.innerHTML='<div class="empty">لا توجد عروض محفوظة بعد.</div>';return}
  wrap.innerHTML=app.library.sort((a,b)=>String(b.updatedAt).localeCompare(String(a.updatedAt))).map(x=>`<div class="saved-item"><div class="saved-meta"><b>${esc(x.title)}</b><small>${new Date(x.updatedAt).toLocaleString('ar-EG')}</small></div><div class="saved-actions"><button class="btn primary small" data-open="${x.id}">فتح</button><button class="btn light small" data-copy="${x.id}">نسخة</button><button class="btn danger small" data-delete="${x.id}">حذف</button></div></div>`).join('');
  wrap.querySelectorAll('[data-open]').forEach(b=>b.onclick=()=>loadSaved(b.dataset.open));
  wrap.querySelectorAll('[data-copy]').forEach(b=>b.onclick=()=>duplicateSaved(b.dataset.copy));
  wrap.querySelectorAll('[data-delete]').forEach(b=>b.onclick=()=>deleteSaved(b.dataset.delete));
}

function newDraft(){
  if(!confirm('بدء عرض جديد؟ سيتم الاحتفاظ بالعروض المحفوظة.'))return;
  app.draft=defaultData().draft;
  app.activeId='';
  persist();
  renderAll();
  toast('تم إنشاء عرض جديد');
}

function quoteText(){
  const q=app.draft,lines=[`عزيزي العميل / ${q.customerName||'................'}`,q.intro,''];
  q.items.forEach((o,i)=>{
    const s=stats(o);
    lines.push(`الخيار ${i+1}:`,
      `الفندق: ${o.hotelName||'—'}`,
      `الدخول: ${dateLabel(o.checkIn)}`,
      `الخروج: ${dateLabel(o.checkOut)}`,
      `نوع الغرفة: ${o.roomType||'—'}`,
      `نوع الوجبة: ${o.mealPlan||'—'}`,
      `الإطلالة: ${o.view||'—'}`,
      `عدد الليالي: ${nightsText(s.nights)}`
    );
    if(o.pricingMode==='weekdayWeekend')
      lines.push(`سعر وسط الأسبوع: ${money(o.weekdayPrice)} ${q.currency} × ${s.weekday}`,`سعر نهاية الأسبوع: ${money(o.weekendPrice)} ${q.currency} × ${s.weekend}`);
    else if(o.pricingMode==='total')
      lines.push(`السعر الكامل للمدة: ${money(o.totalPrice)} ${q.currency}`);
    else
      lines.push(`سعر الليلة: ${money(o.nightlyPrice)} ${q.currency}`);
    
    if(num(o.extraBed)>0)
      lines.push(`سعر السرير الإضافي: ${money(o.extraBed)} ${q.currency}`);
    
    lines.push(`الإجمالي: ${money(s.total)} ${q.currency}`);
    if(o.notes)
      lines.push(`ملاحظات: ${o.notes}`);
    lines.push('');
  });
  lines.push(`الإجمالي النهائي: ${money(grandTotal())} ${q.currency}`,q.notes,q.closing,'',`للتواصل: ${phoneList().join(' | ')}`);
  return lines.join('\n');
}

async function copyQuote(){
  const text=quoteText();
  try{await navigator.clipboard.writeText(text)}
  catch(e){
    const t=document.createElement('textarea');
    t.value=text;
    document.body.appendChild(t);
    t.select();
    document.execCommand('copy');
    t.remove();
  }
  toast('تم نسخ الرسالة');
}

function exportBackup(){
  const blob=new Blob([JSON.stringify(app,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`yanabea-quotes-backup-${today()}.json`;
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}

function importBackup(file){
  const r=new FileReader();
  r.onload=()=>{
    try{
      const data=JSON.parse(r.result);
      if(!data.draft||!Array.isArray(data.library))throw Error();
      app=data;
      normalize();
      persist();
      renderAll();
      toast('تم استيراد النسخة الاحتياطية');
    }catch(e){alert('ملف النسخة الاحتياطية غير صالح')}
  };
  r.readAsText(file);
}

function renderSettings(){
  const nameInput = document.getElementById('companyName');
  if(nameInput) nameInput.value=app.settings.companyName||'';
  const lineInput = document.getElementById('companyLine');
  if(lineInput) lineInput.value=app.settings.companyLine||'';
  const phonesInput=document.getElementById('phones');
  if(phonesInput){
    phonesInput.dir='ltr';
    phonesInput.value=normalizePhones(app.settings.phones||'');
  }
}

function saveSettings(){
  app.settings.companyName=document.getElementById('companyName').value.trim()||'ينابيع الهدى المتميزة';
  app.settings.companyLine=document.getElementById('companyLine').value.trim()||'سكن مطمئن لرحلة مباركة';
  app.settings.phones=normalizePhones(document.getElementById('phones').value);
  persist();
  renderSettings();
  renderPreview();
  toast('تم حفظ الإعدادات');
}

function buildLists(){
  const hotels=HOTELS.map(h=>h.name);
  const rooms=[...new Set(HOTELS.flatMap(h=>(h.rates||[]).map(r=>r.roomType)).filter(Boolean))];
  const meals=[...new Set(HOTELS.map(h=>h.mealPlan).filter(Boolean))];
  const views=['إطلالة الحرم','إطلالة الكعبة','إطلالة المدينة','إطلالة جزئية','بدون إطلالة','حسب المتاح'];
  [['hotelNames',hotels],['roomTypes',rooms],['mealPlans',meals],['views',views]].forEach(([id,list])=>{
    const el=document.getElementById(id);
    if(el)el.innerHTML=list.map(v=>`<option value="${esc(v)}"></option>`).join('');
  });
}

function renderAll(){
  normalize();
  bindRoot();
  renderOffers();
  renderGrandStat();
  renderPreview();
  renderSaved();
  renderSettings();
}


function updateScale(){
  const stage=document.querySelector('.preview-stage');
  if(!stage)return;
  const availableWidth=stage.clientWidth-16;
  if(availableWidth<=0)return;
  const scale=availableWidth<794?Math.max(0.2,availableWidth/794):1;
  document.documentElement.style.setProperty('--preview-scale',scale.toFixed(4));
}

function setMobileTab(tab){
  const e=document.getElementById('editorColumn'),p=document.getElementById('previewColumn');
  if(!e||!p)return;
  e.classList.toggle('mobile-hidden',tab==='preview');
  p.classList.toggle('mobile-hidden',tab!=='preview');
  if(tab==='preview'){setTimeout(updateScale,30);setTimeout(updateScale,150);}
  if(tab==='saved'){
    e.classList.remove('mobile-hidden');
    setTimeout(()=>document.getElementById('savedPanel')?.scrollIntoView({behavior:'smooth'}),20);
  }
  if(tab==='settings'){
    e.classList.remove('mobile-hidden');
    setTimeout(()=>document.getElementById('settingsPanel')?.scrollIntoView({behavior:'smooth'}),20);
  }
  document.querySelectorAll('[data-mobile-tab]').forEach(b=>b.classList.toggle('active',b.dataset.mobileTab===tab));
}

function init(){
  normalize();
  buildLists();
  renderAll();

  const addOfferBtn = document.getElementById('addOffer');
  if(addOfferBtn) addOfferBtn.onclick=()=>{
    if(app.draft.items.length>=MAX_OFFERS){toast('الحد الأقصى 8 خيارات');return}
    app.draft.items.push(defaultOffer());
    persist();
    renderAll();
  };

  ['saveQuote','saveQuoteTop'].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn)btn.onclick=saveCurrent;
  });

  ['newQuote','newQuoteTop'].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn)btn.onclick=newDraft;
  });

  ['printQuote','printTop'].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn)btn.onclick=()=>window.print();
  });

  const copyBtn = document.getElementById('copyText');
  if(copyBtn) copyBtn.onclick=copyQuote;

  const exportBtn = document.getElementById('exportBackup');
  if(exportBtn) exportBtn.onclick=exportBackup;

  const importBtn = document.getElementById('importBackup');
  if(importBtn) importBtn.onchange=e=>{
    const f=e.target.files[0];
    if(f)importBackup(f);
    e.target.value='';
  };

  const saveSettingsBtn = document.getElementById('saveSettings');
  if(saveSettingsBtn) saveSettingsBtn.onclick=saveSettings;



  updateScale();
  window.addEventListener('resize',updateScale);
  window.addEventListener('orientationchange',()=>setTimeout(updateScale,150));
  document.querySelectorAll('[data-mobile-tab]').forEach(b=>b.onclick=()=>setMobileTab(b.dataset.mobileTab));
  window.addEventListener('beforeunload',persist);
}

// SHA-256 with fallback for non-secure contexts (HTTP / local IP / file://)
function sha256Pure(str) {
  function rightRotate(value, amount) {
    return (value >>> amount) | (value << (32 - amount));
  }
  const mathPow = Math.pow;
  const maxWord = mathPow(2, 32);
  const K = [];
  const H = [];
  const isComposite = {};
  let primeCounter = 0;

  for (let candidate = 2; primeCounter < 64; candidate++) {
    if (!isComposite[candidate]) {
      for (let i = 0; i < 300; i += candidate) {
        isComposite[i] = candidate;
      }
      H[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
      K[primeCounter] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      primeCounter++;
    }
  }

  const utf8 = [];
  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode < 0x80) utf8.push(charcode);
    else if (charcode < 0x800) {
      utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
    } else {
      i++;
      charcode = 0x10000 + (((charcode & 0x33f) << 10) | (str.charCodeAt(i) & 0x33f));
      utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
    }
  }

  const bitLen = utf8.length * 8;
  utf8.push(0x80);
  while ((utf8.length % 64) !== 56) {
    utf8.push(0);
  }

  utf8.push(0, 0, 0, 0);
  utf8.push((bitLen >>> 24) & 0xff, (bitLen >>> 16) & 0xff, (bitLen >>> 8) & 0xff, bitLen & 0xff);

  const words = [];
  for (let i = 0; i < utf8.length; i += 4) {
    words.push((utf8[i] << 24) | (utf8[i + 1] << 16) | (utf8[i + 2] << 8) | utf8[i + 3]);
  }

  for (let i = 0; i < words.length; i += 16) {
    const w = words.slice(i, i + 16);
    const hash = H.slice(0);

    for (let j = 0; j < 64; j++) {
      if (j >= 16) {
        const s0 = rightRotate(w[j - 15], 7) ^ rightRotate(w[j - 15], 18) ^ (w[j - 15] >>> 3);
        const s1 = rightRotate(w[j - 2], 17) ^ rightRotate(w[j - 2], 19) ^ (w[j - 2] >>> 10);
        w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
      }

      const S1 = rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25);
      const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
      const temp1 = (hash[7] + S1 + ch + K[j] + w[j]) | 0;
      const S0 = rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22);
      const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
      const temp2 = (S0 + maj) | 0;

      hash[7] = hash[6];
      hash[6] = hash[5];
      hash[5] = hash[4];
      hash[4] = (hash[3] + temp1) | 0;
      hash[3] = hash[2];
      hash[2] = hash[1];
      hash[1] = hash[0];
      hash[0] = (temp1 + temp2) | 0;
    }

    for (let j = 0; j < 8; j++) {
      H[j] = (H[j] + hash[j]) | 0;
    }
  }

  let res = '';
  for (let i = 0; i < 8; i++) {
    res += (H[i] >>> 0).toString(16).padStart(8, '0');
  }
  return res;
}

async function sha256(value){
  try {
    if(window.crypto && crypto.subtle && typeof crypto.subtle.digest === 'function'){
      const data = new TextEncoder().encode(value);
      const digest = await crypto.subtle.digest('SHA-256', data);
      return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch(e) {}
  return sha256Pure(value);
}

function unlockApp(){
  document.body.classList.remove('auth-locked');
  const gate=document.getElementById('authGate');
  if(gate)gate.remove();
  init();
}

function setupAuth(){
  if(sessionStorage.getItem('yanabea_auth_ok')==='1'){
    unlockApp();
    return;
  }
  const form=document.getElementById('authForm'),input=document.getElementById('authPassword'),error=document.getElementById('authError');
  if(!form||!input)return;
  setTimeout(()=>input.focus(),50);
  form.addEventListener('submit',async e=>{
    e.preventDefault();
    if(error)error.textContent='';
    try{
      const hash=await sha256(input.value);
      if(hash===AUTH_HASH){
        sessionStorage.setItem('yanabea_auth_ok','1');
        unlockApp();
      }else{
        if(error)error.textContent='كلمة المرور غير صحيحة';
        input.value='';
        input.focus();
      }
    }catch(err){
      if(error)error.textContent='تعذر التحقق من كلمة المرور في هذا المتصفح';
    }
  });
}

setupAuth();

if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
  window.addEventListener('load',async()=>{
    try{
      const reg=await navigator.serviceWorker.register('./sw.js');
      await reg.update();
    }catch(e){}
  });
}

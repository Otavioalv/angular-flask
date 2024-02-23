def transformJSON(lists_tup):
    list_list = []
    for result in lists_tup:
        list_dict = {
            'id': result[0],
            'name': result[1],
            'birthday': result[2]
        }
        list_list.append(list_dict); 
    
    return list_list;
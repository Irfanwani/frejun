//
//  MyModule.swift
//  frejun
//
//  Created by Irfan wani on 25/03/23.
//

import Foundation
//import RCTTypeSafety

@objc(MyModule)
class MyModule: NSObject{
  
  private var myname = "Irfan";
  
  @objc
  func alterstring(){
    myname += " wani";
  }
  
  @objc
  static func requiresMainQueueSetup() -> Bool{
    return true;
  }
  
  @objc
  func constantsToExport() -> [String: Any]!{
    return ["firstname": "Irfan", "lastname": "wani"];
  }
}

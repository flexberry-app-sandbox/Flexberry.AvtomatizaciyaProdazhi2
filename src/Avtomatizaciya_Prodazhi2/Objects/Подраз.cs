﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Avtomatizaciya_Prodazhi2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Подраз.
    /// </summary>
    // *** Start programmer edit section *** (Подраз CustomAttributes)

    // *** End programmer edit section *** (Подраз CustomAttributes)
    [AutoAltered()]
    [Caption("Подразделение")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПодразE", new string[] {
            "Подразделение as \'Подразделение\'"})]
    [View("ПодразL", new string[] {
            "Подразделение as \'Подразделение\'"})]
    public class Подраз : ICSSoft.STORMNET.DataObject
    {
        
        private string fПодразделение;
        
        // *** Start programmer edit section *** (Подраз CustomMembers)

        // *** End programmer edit section *** (Подраз CustomMembers)

        
        /// <summary>
        /// Подразделение.
        /// </summary>
        // *** Start programmer edit section *** (Подраз.Подразделение CustomAttributes)

        // *** End programmer edit section *** (Подраз.Подразделение CustomAttributes)
        [StrLen(255)]
        public virtual string Подразделение
        {
            get
            {
                // *** Start programmer edit section *** (Подраз.Подразделение Get start)

                // *** End programmer edit section *** (Подраз.Подразделение Get start)
                string result = this.fПодразделение;
                // *** Start programmer edit section *** (Подраз.Подразделение Get end)

                // *** End programmer edit section *** (Подраз.Подразделение Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Подраз.Подразделение Set start)

                // *** End programmer edit section *** (Подраз.Подразделение Set start)
                this.fПодразделение = value;
                // *** Start programmer edit section *** (Подраз.Подразделение Set end)

                // *** End programmer edit section *** (Подраз.Подразделение Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПодразE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПодразE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПодразE", typeof(IIS.Avtomatizaciya_Prodazhi2.Подраз));
                }
            }
            
            /// <summary>
            /// "ПодразL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПодразL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПодразL", typeof(IIS.Avtomatizaciya_Prodazhi2.Подраз));
                }
            }
        }
    }
}

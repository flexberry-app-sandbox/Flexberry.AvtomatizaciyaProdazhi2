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
    /// Менедж.
    /// </summary>
    // *** Start programmer edit section *** (Менедж CustomAttributes)

    // *** End programmer edit section *** (Менедж CustomAttributes)
    [AutoAltered()]
    [Caption("Менеджер")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МенеджE", new string[] {
            "Сотруд.ФИО as \'ФИО\'",
            "Сотруд as \'Сотрудник\'"}, Hidden=new string[] {
            "Сотруд.ФИО"})]
    [MasterViewDefineAttribute("МенеджE", "Сотруд", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [View("МенеджL", new string[] {
            "Сотруд.ФИО as \'ФИО\'"})]
    public class Менедж : ICSSoft.STORMNET.DataObject
    {
        
        private IIS.Avtomatizaciya_Prodazhi2.Сотруд fСотруд;
        
        // *** Start programmer edit section *** (Менедж CustomMembers)

        // *** End programmer edit section *** (Менедж CustomMembers)

        
        /// <summary>
        /// Менедж.
        /// </summary>
        // *** Start programmer edit section *** (Менедж.Сотруд CustomAttributes)

        // *** End programmer edit section *** (Менедж.Сотруд CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотруд"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_Prodazhi2.Сотруд Сотруд
        {
            get
            {
                // *** Start programmer edit section *** (Менедж.Сотруд Get start)

                // *** End programmer edit section *** (Менедж.Сотруд Get start)
                IIS.Avtomatizaciya_Prodazhi2.Сотруд result = this.fСотруд;
                // *** Start programmer edit section *** (Менедж.Сотруд Get end)

                // *** End programmer edit section *** (Менедж.Сотруд Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Менедж.Сотруд Set start)

                // *** End programmer edit section *** (Менедж.Сотруд Set start)
                this.fСотруд = value;
                // *** Start programmer edit section *** (Менедж.Сотруд Set end)

                // *** End programmer edit section *** (Менедж.Сотруд Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МенеджE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МенеджE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МенеджE", typeof(IIS.Avtomatizaciya_Prodazhi2.Менедж));
                }
            }
            
            /// <summary>
            /// "МенеджL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МенеджL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МенеджL", typeof(IIS.Avtomatizaciya_Prodazhi2.Менедж));
                }
            }
        }
    }
}

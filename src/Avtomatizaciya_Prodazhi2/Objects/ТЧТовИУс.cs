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
    /// Т ч тов и ус.
    /// </summary>
    // *** Start programmer edit section *** (ТЧТовИУс CustomAttributes)

    // *** End programmer edit section *** (ТЧТовИУс CustomAttributes)
    [AutoAltered()]
    [Caption("Табличная часть товаров и услуг")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТЧТовИУсE", new string[] {
            "Номенк as \'Номенклатура\'",
            "Номенк.Номен as \'Номенклатура\'",
            "Цена as \'Цена\'",
            "Количестов as \'Количестов\'",
            "КолКЗаказПоста as \'Количество к заказу поставщика\'",
            "Сумма as \'Сумма\'",
            "СуммаНДС as \'Сумма НДС\'"}, Hidden=new string[] {
            "Номенк.Номен"})]
    [MasterViewDefineAttribute("ТЧТовИУсE", "Номенк", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Номен")]
    public class ТЧТовИУс : ICSSoft.STORMNET.DataObject
    {
        
        private int fСумма;
        
        private int fСуммаНДС;
        
        private int fКоличестов;
        
        private int fЦена;
        
        private int fКолКЗаказПоста;
        
        private IIS.Avtomatizaciya_Prodazhi2.Номенк fНоменк;
        
        private IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод fОтчОПрод;
        
        // *** Start programmer edit section *** (ТЧТовИУс CustomMembers)

        // *** End programmer edit section *** (ТЧТовИУс CustomMembers)

        
        /// <summary>
        /// Количестов.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.Количестов CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.Количестов CustomAttributes)
        public virtual int Количестов
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Количестов Get start)

                // *** End programmer edit section *** (ТЧТовИУс.Количестов Get start)
                int result = this.fКоличестов;
                // *** Start programmer edit section *** (ТЧТовИУс.Количестов Get end)

                // *** End programmer edit section *** (ТЧТовИУс.Количестов Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Количестов Set start)

                // *** End programmer edit section *** (ТЧТовИУс.Количестов Set start)
                this.fКоличестов = value;
                // *** Start programmer edit section *** (ТЧТовИУс.Количестов Set end)

                // *** End programmer edit section *** (ТЧТовИУс.Количестов Set end)
            }
        }
        
        /// <summary>
        /// КолКЗаказПоста.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.КолКЗаказПоста CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.КолКЗаказПоста CustomAttributes)
        public virtual int КолКЗаказПоста
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Get start)

                // *** End programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Get start)
                int result = this.fКолКЗаказПоста;
                // *** Start programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Get end)

                // *** End programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Set start)

                // *** End programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Set start)
                this.fКолКЗаказПоста = value;
                // *** Start programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Set end)

                // *** End programmer edit section *** (ТЧТовИУс.КолКЗаказПоста Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.Сумма CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.Сумма CustomAttributes)
        public virtual int Сумма
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Сумма Get start)

                // *** End programmer edit section *** (ТЧТовИУс.Сумма Get start)
                int result = this.fСумма;
                // *** Start programmer edit section *** (ТЧТовИУс.Сумма Get end)

                // *** End programmer edit section *** (ТЧТовИУс.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Сумма Set start)

                // *** End programmer edit section *** (ТЧТовИУс.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (ТЧТовИУс.Сумма Set end)

                // *** End programmer edit section *** (ТЧТовИУс.Сумма Set end)
            }
        }
        
        /// <summary>
        /// СуммаНДС.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.СуммаНДС CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.СуммаНДС CustomAttributes)
        public virtual int СуммаНДС
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.СуммаНДС Get start)

                // *** End programmer edit section *** (ТЧТовИУс.СуммаНДС Get start)
                int result = this.fСуммаНДС;
                // *** Start programmer edit section *** (ТЧТовИУс.СуммаНДС Get end)

                // *** End programmer edit section *** (ТЧТовИУс.СуммаНДС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.СуммаНДС Set start)

                // *** End programmer edit section *** (ТЧТовИУс.СуммаНДС Set start)
                this.fСуммаНДС = value;
                // *** Start programmer edit section *** (ТЧТовИУс.СуммаНДС Set end)

                // *** End programmer edit section *** (ТЧТовИУс.СуммаНДС Set end)
            }
        }
        
        /// <summary>
        /// Цена.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.Цена CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.Цена CustomAttributes)
        public virtual int Цена
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Цена Get start)

                // *** End programmer edit section *** (ТЧТовИУс.Цена Get start)
                int result = this.fЦена;
                // *** Start programmer edit section *** (ТЧТовИУс.Цена Get end)

                // *** End programmer edit section *** (ТЧТовИУс.Цена Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Цена Set start)

                // *** End programmer edit section *** (ТЧТовИУс.Цена Set start)
                this.fЦена = value;
                // *** Start programmer edit section *** (ТЧТовИУс.Цена Set end)

                // *** End programmer edit section *** (ТЧТовИУс.Цена Set end)
            }
        }
        
        /// <summary>
        /// Т ч тов и ус.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.Номенк CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.Номенк CustomAttributes)
        [PropertyStorage(new string[] {
                "Номенк"})]
        [NotNull()]
        public virtual IIS.Avtomatizaciya_Prodazhi2.Номенк Номенк
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Номенк Get start)

                // *** End programmer edit section *** (ТЧТовИУс.Номенк Get start)
                IIS.Avtomatizaciya_Prodazhi2.Номенк result = this.fНоменк;
                // *** Start programmer edit section *** (ТЧТовИУс.Номенк Get end)

                // *** End programmer edit section *** (ТЧТовИУс.Номенк Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.Номенк Set start)

                // *** End programmer edit section *** (ТЧТовИУс.Номенк Set start)
                this.fНоменк = value;
                // *** Start programmer edit section *** (ТЧТовИУс.Номенк Set end)

                // *** End programmer edit section *** (ТЧТовИУс.Номенк Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод.
        /// </summary>
        // *** Start programmer edit section *** (ТЧТовИУс.ОтчОПрод CustomAttributes)

        // *** End programmer edit section *** (ТЧТовИУс.ОтчОПрод CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage("ОтчОПрод")]
        [TypeUsage(new string[] {
                "IIS.Avtomatizaciya_Prodazhi2.ЗакПокуп",
                "IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод"})]
        public virtual IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод ОтчОПрод
        {
            get
            {
                // *** Start programmer edit section *** (ТЧТовИУс.ОтчОПрод Get start)

                // *** End programmer edit section *** (ТЧТовИУс.ОтчОПрод Get start)
                IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод result = this.fОтчОПрод;
                // *** Start programmer edit section *** (ТЧТовИУс.ОтчОПрод Get end)

                // *** End programmer edit section *** (ТЧТовИУс.ОтчОПрод Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТЧТовИУс.ОтчОПрод Set start)

                // *** End programmer edit section *** (ТЧТовИУс.ОтчОПрод Set start)
                this.fОтчОПрод = value;
                // *** Start programmer edit section *** (ТЧТовИУс.ОтчОПрод Set end)

                // *** End programmer edit section *** (ТЧТовИУс.ОтчОПрод Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТЧТовИУсE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТЧТовИУсE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТЧТовИУсE", typeof(IIS.Avtomatizaciya_Prodazhi2.ТЧТовИУс));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ТЧТовИУс.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfТЧТовИУс CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfТЧТовИУс CustomAttributes)
    public class DetailArrayOfТЧТовИУс : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Avtomatizaciya_Prodazhi2.DetailArrayOfТЧТовИУс members)

        // *** End programmer edit section *** (IIS.Avtomatizaciya_Prodazhi2.DetailArrayOfТЧТовИУс members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ТЧТовИУс by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ТЧТовИУс.
        /// </summary>
        public DetailArrayOfТЧТовИУс(IIS.Avtomatizaciya_Prodazhi2.ОтчОПрод fОтчОПрод) : 
                base(typeof(ТЧТовИУс), ((ICSSoft.STORMNET.DataObject)(fОтчОПрод)))
        {
        }
        
        public IIS.Avtomatizaciya_Prodazhi2.ТЧТовИУс this[int index]
        {
            get
            {
                return ((IIS.Avtomatizaciya_Prodazhi2.ТЧТовИУс)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Avtomatizaciya_Prodazhi2.ТЧТовИУс dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
